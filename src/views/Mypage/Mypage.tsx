import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../hooks/useModal';
import { useUpdateForm } from '../../hooks/useUpdateForm';
import { useGetMyRecipes } from '../../hooks/useGetMyRecipes';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';
import { Button, Typography, Avatar, Grid, Pagination, Box, Skeleton } from '@mui/material';
import { useUserUpdate } from '../../hooks/useUserUpdate';
import { useRecipeDelete } from '../../hooks/useRecipeDelete';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';
import colors from '../../styles/colors';
import { useBookmark } from '../../hooks/useBookmark';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { userFormHandler } from '../../handler/userFormHandler';
import useAuthToken from '../../hooks/useAuthToken';
import { useNavigate } from 'react-router-dom';
import { useDeleteUser } from '../../hooks/useDeleteUser';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal, showModal } from '../../redux/reducer/modalSlice';
import { RootState } from '../../redux/store/store';

export default function Mypage(): JSX.Element {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state: RootState) => state.user.value.isLoggedIn);

    //로그인확인
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        setIsLoading(true);
        async function fetchData() {
            try {
                await refetchUserInfo();
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [isLoggedIn, navigate]);

    const { handleDeleteUser } = useDeleteUser();

    //provider에서 kakao or 일반유저 확인하기위해 사용.
    const parsedData = JSON.parse(sessionStorage.getItem('persist:root')!);
    const userData = JSON.parse(parsedData.user);
    const parsedProvider = userData.value.provider;
    console.log(parsedProvider);

    const token = useAuthToken();
    // 페이지 번호 상태
    const [myRecipesPage, setMyRecipesPage] = useState(1);
    const [scrapedRecipesPage, setScrapedRecipesPage] = useState(1);

    //유저 정보 hook
    const { userInfo, refetchUserInfo: refetchUserInfo } = useGetUserInfo();

    // 스크랩, 작성 게시물 불러오는 hook
    const { myRecipes, setMyRecipes, scrapedRecipes, totalMyRecipesPages, totalScrapedRecipesPages, setScrapedRecipes } = useGetMyRecipes(
        myRecipesPage,
        scrapedRecipesPage,
    );

    //게시물 삭제 hook
    const { handleMyRecipeDelete } = useRecipeDelete(setMyRecipes);

    //북마크 hook
    const { bookmarkRecipes, handleClickBookmark, setBookmarkRecipes } = useBookmark(setScrapedRecipes);

    //유효성 검사를 위한 hook
    const {
        password,
        newPassword,
        passwordCheck,
        nickname,
        setPassword,
        setNewPassword,
        setPasswordCheck,
        setNickname,
        errors,
        touched,
        handleBlur,
        clearFieldError,
    } = useUpdateForm();

    //모달 상태관리 hook
    const {
        isModalVisible,
        isCheckModal,
        isPasswordModal,
        closeModal,
        handlePasswordModalClose,
        handleCheckModalClose,
        setIsModalVisible,
        isDelUserModal,
        handleDelUserClose,
        handleDelUserOpen,
    } = useModal();

    //회원정보수정 hook
    const { handleUpdate } = useUserUpdate(
        password,
        newPassword,
        passwordCheck,
        nickname,
        closeModal,
        refetchUserInfo,
        setPassword,
        setNewPassword,
        setPasswordCheck,
        setNickname,
    );

    //닉네임중복확인
    const { inputMessage, clickedButEmpty } = userFormHandler();
    const [nicknameCheck, setNicknameCheck] = useState<boolean>(false);
    const [checkFailMessage, setCheckFailMessage] = useState<string>('');

    //닉네임체크 핸들러
    const handleCheckNickname = async () => {
        try {
            const response: any = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/nickname-check?nickname=${nickname}`);
            console.log('mypage nickanme check, response( 204 ok 전): ', response);
            if (response.data.data === true) {
                console.log(response);
                setNicknameCheck(true);
                setCheckFailMessage(response.data.message);
            } else if (response.data.data === false) {
                setNicknameCheck(false);
                setCheckFailMessage(response.data.message);
            }
            dispatch(
                showModal({
                    isOpen: true,
                    content: response.data.message,
                    onConfirm: () => {
                        dispatch(hideModal());
                    },
                }),
            );
        } catch (err) {
            console.log(err);
        }
    };

    //비밀번호확인 핸들러
    const [passowordInfoCheck, setPasswordInfoCheck] = useState<boolean>(false);
    const [checkFailMsg, setCheckFailMsg] = useState<string>('');
    const handlePasswordCheck = async () => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/auth/password-check`,
                {
                    password: password,
                },
                {
                    headers: {
                        'access-token': `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );
            console.log('비밀번호 확인 response:', response.data);
            console.log('비밀번호 확인 response.data.data:', response.data.data);
            console.log('비밀번호 확인 response.data.message:', response.data.message);
            if (response.data.data === true) {
                console.log(response);
                setPasswordInfoCheck(true);
                setCheckFailMsg(response.data.message);
            } else if (response.data.data === false) {
                setCheckFailMsg(response.data.message);
            }
            dispatch(
                showModal({
                    isOpen: true,
                    content: response.data.message,
                    onConfirm: () => {
                        dispatch(hideModal());
                    },
                }),
            );
            console.log('passwordcheckmessage : ', response.data.message);
        } catch (error) {
            console.error('비밀번호 확인 중 오류 발생:', error);
        }
    };

    useEffect(() => {
        if (scrapedRecipes.length > 0) {
            // `scrapedRecipes`에 스크랩된 게시물 ID 값을 기반으로 `bookmarkRecipes` 업데이트
            const initialBookmarks = scrapedRecipes.reduce((acc, recipe) => {
                acc[recipe.recipeId] = true; // 이미 스크랩된 게시물은 true로 설정
                return acc;
            }, {} as Record<string, boolean>);

            setBookmarkRecipes(initialBookmarks);
        }
    }, [scrapedRecipes, setBookmarkRecipes]);

    const renderPlaceholderItems = (count: number) =>
        Array.from({ length: count }).map((_, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
                <S_defaultBox />
            </Grid>
        ));

    return (
        <S_MyContainer>
            {isLoading ? (
                <SkeletonMypage />
            ) : (
                <>
                    <S_Content>
                        <S_MyScrap>
                            <S_Subtitle variant="h5">찜한 레시피</S_Subtitle>
                            <Grid container spacing={2}>
                                {scrapedRecipes.length > 0
                                    ? scrapedRecipes.map((scrapedRecipe) => (
                                          <Grid item xs={12} sm={6} md={6} key={scrapedRecipe.recipeId}>
                                              <S_MyFigure>
                                                  <S_thumbnail src={scrapedRecipe.recipeThumbnail} alt="스크랩 이미지" />
                                                  <M_Linked to={`/recipes/${scrapedRecipe.recipeId}`}>
                                                      <S_MyFigcaption>{scrapedRecipe.recipeName}</S_MyFigcaption>
                                                  </M_Linked>
                                                  <M_BookmarkIcons
                                                      onClick={() => handleClickBookmark(scrapedRecipe.recipeId)}
                                                      mark={bookmarkRecipes[scrapedRecipe.recipeId] ?? false}
                                                  >
                                                      {bookmarkRecipes[scrapedRecipe.recipeId] ? <FaBookmark /> : <FaRegBookmark />}
                                                  </M_BookmarkIcons>
                                              </S_MyFigure>
                                          </Grid>
                                      ))
                                    : renderPlaceholderItems(4)}
                            </Grid>

                            <S_PaginationContainer>
                                <Pagination
                                    count={totalScrapedRecipesPages} // 스크랩 레시피 총 페이지 수
                                    page={scrapedRecipesPage}
                                    onChange={(_, page) => setScrapedRecipesPage(page)} // 페이지 변경
                                    variant="outlined"
                                    color="primary"
                                    shape="rounded"
                                    size="large"
                                    sx={{ mt: 2 }}
                                />
                            </S_PaginationContainer>
                        </S_MyScrap>

                        <S_MyPosting>
                            <S_Subtitle variant="h5">작성한 레시피</S_Subtitle>
                            <Grid container spacing={2}>
                                {myRecipes.length > 0
                                    ? myRecipes.map((myRecipe) => (
                                          <Grid item xs={12} sm={6} md={6} key={myRecipe.myRecipeId}>
                                              <S_MyFigure>
                                                  <S_button onClick={() => handleMyRecipeDelete(myRecipe.myRecipeId)}>삭제</S_button>
                                                  <S_thumbnail src={myRecipe.myRecipeThumbnail} alt="작성 레시피 이미지" />
                                                  <M_Linked to={`/recipes/${myRecipe.myRecipeId}`}>
                                                      <S_MyFigcaption>{myRecipe.myRecipeName}</S_MyFigcaption>
                                                  </M_Linked>
                                              </S_MyFigure>
                                          </Grid>
                                      ))
                                    : renderPlaceholderItems(4)}
                            </Grid>
                            <S_PaginationContainer>
                                <Pagination
                                    count={totalMyRecipesPages} // 작성한 레시피 총 페이지 수
                                    page={myRecipesPage}
                                    onChange={(_, page) => setMyRecipesPage(page)} // 페이지 변경
                                    variant="outlined"
                                    color="primary"
                                    shape="rounded"
                                    size="large"
                                    sx={{ mt: 2 }}
                                />
                            </S_PaginationContainer>
                        </S_MyPosting>
                    </S_Content>

                    <S_MyInfo>
                        <S_Subtitle variant="h5">내 정보</S_Subtitle>
                        <S_MyInfoText>
                            <Avatar
                                alt="user-profile"
                                src={userInfo.img}
                                sx={{ width: 150, height: 150, mb: 4, boxShadow: 3, border: '3px solid #3f51b5' }}
                            />
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#3f51b5', mb: 1 }}>
                                이메일: {userInfo.email}
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                                닉네임: {userInfo.nickname}
                            </Typography>
                        </S_MyInfoText>
                        <S_ButtonWrapper>
                            {parsedProvider === 'kakao' ? (
                                <>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        sx={{
                                            width: '100%',
                                            mb: 2,
                                            boxShadow: 3,
                                        }}
                                        onClick={handleDelUserOpen}
                                    >
                                        회원탈퇴
                                    </Button>
                                    {isDelUserModal && (
                                        <Modal
                                            visible={isDelUserModal}
                                            onClose={handleDelUserClose}
                                            buttons={[
                                                { label: '확인', onClick: handleDeleteUser },
                                                { label: '취소', onClick: handleDelUserClose },
                                            ]}
                                        >
                                            <h2>회원탈퇴</h2>
                                            <p>정말 탈퇴하시겠습니까? </p>
                                        </Modal>
                                    )}
                                </>
                            ) : (
                                <>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => setIsModalVisible(true)}
                                        sx={{
                                            width: '100%',
                                            mb: 2,
                                            boxShadow: 3,
                                        }}
                                    >
                                        회원정보 수정
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        sx={{
                                            width: '100%',
                                            mb: 2,
                                            boxShadow: 3,
                                        }}
                                        onClick={handleDelUserOpen}
                                    >
                                        회원탈퇴
                                    </Button>
                                    {isDelUserModal && (
                                        <Modal
                                            visible={isDelUserModal}
                                            onClose={handleDelUserClose}
                                            buttons={[
                                                { label: '확인', onClick: handleDeleteUser },
                                                { label: '취소', onClick: handleDelUserClose },
                                            ]}
                                        >
                                            <h2>회원탈퇴</h2>
                                            <p>정말 탈퇴하시겠습니까?</p>
                                        </Modal>
                                    )}
                                    {isModalVisible && (
                                        <Modal
                                            visible={isModalVisible}
                                            onClose={closeModal}
                                            buttons={[
                                                { label: '수정', onClick: handleUpdate, disabled: !(nicknameCheck && passowordInfoCheck) },
                                                { label: '취소', onClick: closeModal },
                                            ]}
                                        >
                                            <h1>회원정보 수정</h1>
                                            <S_Input
                                                value={nickname}
                                                placeholder="변경할 닉네임을 입력하세요"
                                                onChange={(e) => setNickname(e.target.value)}
                                                isError={!!errors.nickname && touched.nickname}
                                                onFocus={() => clearFieldError('nickname')}
                                                onBlur={() => handleBlur('nickname')}
                                            />
                                            <Button
                                                type="button"
                                                onClick={() => {
                                                    handleCheckNickname();
                                                }}
                                            >
                                                중복확인
                                            </Button>
                                            {isCheckModal && (
                                                <Modal
                                                    visible={isCheckModal}
                                                    onClose={handleCheckModalClose}
                                                    buttons={[{ label: '확인', onClick: handleCheckModalClose }]}
                                                >
                                                    <h2>중복 확인</h2>
                                                    <p> {checkFailMessage} </p>
                                                </Modal>
                                            )}
                                            {nicknameCheck ? (
                                                <ErrorMessage visible={!!inputMessage.nickname && clickedButEmpty.nickname}>
                                                    {inputMessage.nickname}
                                                </ErrorMessage>
                                            ) : (
                                                <ErrorMessage visible={true}>{checkFailMessage}</ErrorMessage>
                                            )}
                                            <S_ErrorMessage visible={!!errors.nickname && touched.nickname}>{errors.nickname}</S_ErrorMessage>
                                            <S_Input
                                                value={password}
                                                placeholder="기존 비밀번호를 입력하세요"
                                                onChange={(e) => setPassword(e.target.value)}
                                                isError={!!errors.password && touched.password}
                                                onFocus={() => clearFieldError('password')}
                                                onBlur={() => handleBlur('password')}
                                                type="password"
                                            />
                                            <Button
                                                type="button"
                                                onClick={() => {
                                                    handlePasswordCheck();
                                                }}
                                            >
                                                비밀번호 확인
                                            </Button>
                                            {isPasswordModal && (
                                                <Modal
                                                    visible={isPasswordModal}
                                                    onClose={handlePasswordModalClose}
                                                    buttons={[{ label: '확인', onClick: handlePasswordModalClose }]}
                                                >
                                                    <h2>비밀번호 확인</h2>
                                                    <p> {checkFailMsg} </p>
                                                </Modal>
                                            )}
                                            {passowordInfoCheck ? (
                                                <ErrorMessage visible={!!inputMessage.password && clickedButEmpty.password}>
                                                    {inputMessage.password}
                                                </ErrorMessage>
                                            ) : (
                                                <ErrorMessage visible={true}>{checkFailMsg}</ErrorMessage>
                                            )}
                                            <S_ErrorMessage visible={!!errors.password && touched.password}>{errors.password}</S_ErrorMessage>
                                            <S_Input
                                                value={newPassword}
                                                placeholder="변경할 비밀번호를 입력하세요"
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                isError={!!errors.newPassword && touched.newPassword}
                                                onFocus={() => clearFieldError('newpassword')}
                                                onBlur={() => handleBlur('newpassword')}
                                                type="password"
                                            />
                                            <S_ErrorMessage visible={!!errors.newpassword && touched.newpassword}>
                                                {errors.newpassword}
                                            </S_ErrorMessage>
                                            <S_Input
                                                value={passwordCheck}
                                                placeholder="변경할 비밀번호를 한번 더 입력하세요"
                                                onChange={(e) => setPasswordCheck(e.target.value)}
                                                isError={!!errors.passwordCheck && touched.passwordCheck}
                                                onFocus={() => clearFieldError('passwordCheck')}
                                                onBlur={() => handleBlur('passwordCheck')}
                                                type="password"
                                            />
                                            <S_ErrorMessage visible={!!errors.passwordCheck && touched.passwordCheck}>
                                                {errors.passwordCheck}
                                            </S_ErrorMessage>
                                        </Modal>
                                    )}
                                </>
                            )}
                        </S_ButtonWrapper>
                    </S_MyInfo>
                </>
            )}
        </S_MyContainer>
    );
}

const S_MyContainer = styled.section`
    padding: 40px;
    display: grid;
    grid-template-columns: 7fr 3fr;
    gap: 40px;
`;

const S_Content = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
`;

const S_MyScrap = styled.div``;
const S_MyPosting = styled.div``;

const S_Subtitle = styled(Typography)`
    font-size: 20px;
    font-weight: 500;
`;

const S_MyFigure = styled.figure`
    position: relative;
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    width: 100%;
    min-height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &:hover {
        transform: translateY(-5px);
    }
`;

const S_MyFigcaption = styled.figcaption`
    margin-top: 12px;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    width: 100%;
    word-break: keep-all;
`;

const S_MyInfo = styled.div`
    position: sticky;
    top: 50px;
    align-self: start;
`;

const S_MyInfoText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const S_ButtonWrapper = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: space-around;
`;

const S_PaginationContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;

const S_ErrorMessage = styled.p<{ visible: boolean }>`
    color: red;
    font-size: 0.8rem;
    margin-top: 5px;
    margin-right: 260px;
    min-height: 20px;
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

const S_Input = styled.input<{ isError: boolean }>`
    width: 400px;
    height: 45px;
    color: gray;
    margin-top: 20px;
    border-radius: 10px;
    font-size: 1rem;
    border: ${(props) => (props.isError ? '2px solid red' : '1px solid #ccc')};
`;

const M_BookmarkIcons = styled(Box)<{ mark: boolean }>(({ mark }) => ({
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: mark ? colors[400] : 'inherit',
    cursor: 'pointer',
}));

const ErrorMessage = styled.p<{ visible: boolean }>`
    min-height: 20px;
    margin-top: 5px;
    color: red;
    font-size: 0.8rem;
    text-align: start;
    visibility: ${(props) => (props.visible ? 'visible' : 'none')}; /* 에러가 없을 때는 숨김 */
`;

const M_Linked = styled(Link)({
    display: 'block',
    textDecorationLine: 'none',
    color: '#000',

    '&:hover': {
        color: colors[400],
        cursor: 'pointer',
    },
});

const S_defaultBox = styled.div`
    width: 100%;
    height: 180px;
    background-color: #f0f0f0;
    border-radius: 8px;
`;

const S_thumbnail = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    flex-shrink: 0;
`;

const S_button = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: ${colors[400]};
    color: white;
    border: none;
`;

const SkeletonMypage: React.FC = () => {
    return (
        <Box>
            <Skeleton variant="rectangular" width="100%" height={200} />
            <Skeleton variant="text" width="60%" height={30} />
            <Skeleton variant="text" width="40%" height={30} />
        </Box>
    );
};
