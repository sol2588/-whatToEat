import { useState } from 'react';
import { useDispatch } from 'react-redux';
import instance from '../../utils/api/instance';
import { useModal } from '../../hooks/useModal';
import { useUpdateForm } from '../../hooks/useUpdateForm';
import { useGetMyRecipes } from '../../hooks/useGetMyRecipes';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';
import { useUserUpdate } from '../../hooks/useUserUpdate';
import withAuth from '../../hooks/withAuth';
import { userFormHandler } from '../../handler/userFormHandler';
import { useDeleteUser } from '../../hooks/useDeleteUser';
import { hideModal, showModal } from '../../redux/reducer/modalSlice';
import MyScrap from './MyScrap';
import Modal from '../../components/Modal/Modal';
import { Button } from '@mui/material';
import styled from 'styled-components';
import MyRecipes from './MyRecipes';

function Mypage(): JSX.Element {
    const dispatch = useDispatch();
    const { handleDeleteUser } = useDeleteUser();

    // kakao or 일반유저 확인
    const parsedData = JSON.parse(sessionStorage.getItem('persist:root')!);
    const userData = JSON.parse(parsedData.user);
    const parsedProvider = userData.value.provider;

    // 페이지 번호
    const [myRecipesPage, setMyRecipesPage] = useState(1);
    const [scrapedRecipesPage, setScrapedRecipesPage] = useState(1);

    //유저 정보
    const { userInfo, refetchUserInfo: refetchUserInfo } = useGetUserInfo();

    // 스크랩, 작성 게시물
    const { myRecipes, setMyRecipes, totalMyRecipesPages, totalScrapedRecipesPages } = useGetMyRecipes(myRecipesPage, scrapedRecipesPage);

    //유효성 검사
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

    //모달 상태관리
    const { isModalVisible, isCheckModal, isPasswordModal, closeModal, handlePasswordModalClose, handleCheckModalClose, setIsModalVisible } =
        useModal();

    //회원정보수정
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
            const response: any = await instance.get(`/auth/nickname-check?nickname=${nickname}`);
            if (response.data.data === true) {
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
            const response = await instance.post(`/auth/password-check`, { password: password });
            if (response.data.data === true) {
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
        } catch (error) {
            console.error('비밀번호 확인 중 오류 발생:', error);
        }
    };

    return (
        <S_MyContainer>
            <S_Content>
                <MyScrap scrapPage={scrapedRecipesPage} setScrapPage={setScrapedRecipesPage} totalPage={totalScrapedRecipesPages} />
                <MyRecipes
                    myRecipes={myRecipes}
                    setMyRecipes={setMyRecipes}
                    myRecipesPage={myRecipesPage}
                    setMyRecipesPage={setMyRecipesPage}
                    totalPage={totalMyRecipesPages}
                />
            </S_Content>

            <S_MyInfo>
                <S_Subtitle>내 정보</S_Subtitle>
                <S_MyInfoFigure>
                    <img alt="user-profile" src={userInfo.img} />
                    <S_MyInfoFigcaption>
                        <p>이메일: {userInfo.email}</p>
                        <p>닉네임: {userInfo.nickname}</p>
                    </S_MyInfoFigcaption>
                </S_MyInfoFigure>
                <S_ButtonWrapper>
                    {parsedProvider === 'kakao' ? (
                        <>
                            <S_MyinfoBtn
                                red={true}
                                onClick={() =>
                                    dispatch(
                                        showModal({
                                            isOpen: true,
                                            content: '정말 탈퇴하시겠습니까?',
                                            onConfirm: () => {
                                                handleDeleteUser();
                                            },
                                        }),
                                    )
                                }
                            >
                                회원탈퇴
                            </S_MyinfoBtn>
                        </>
                    ) : (
                        <>
                            <S_MyinfoBtn red={false} onClick={() => setIsModalVisible(true)}>
                                회원정보 수정
                            </S_MyinfoBtn>
                            <S_MyinfoBtn
                                red={true}
                                onClick={() =>
                                    dispatch(
                                        showModal({
                                            isOpen: true,
                                            content: '정말 탈퇴하시겠습니까?',
                                            onConfirm: () => {
                                                handleDeleteUser();
                                            },
                                        }),
                                    )
                                }
                            >
                                회원탈퇴
                            </S_MyinfoBtn>
                            {isModalVisible && (
                                <Modal
                                    visible={isModalVisible}
                                    onClose={closeModal}
                                    buttons={[
                                        { label: '수정', onClick: handleUpdate, disabled: !(nicknameCheck && passowordInfoCheck) },
                                        { label: '취소', onClick: closeModal },
                                    ]}
                                >
                                    <h1>내정보 수정</h1>
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
                                    <S_ErrorMessage visible={!!errors.newpassword && touched.newpassword}>{errors.newpassword}</S_ErrorMessage>
                                    <S_Input
                                        value={passwordCheck}
                                        placeholder="변경할 비밀번호를 한번 더 입력하세요"
                                        onChange={(e) => setPasswordCheck(e.target.value)}
                                        isError={!!errors.passwordCheck && touched.passwordCheck}
                                        onFocus={() => clearFieldError('passwordCheck')}
                                        onBlur={() => handleBlur('passwordCheck')}
                                        type="password"
                                    />
                                    <S_ErrorMessage visible={!!errors.passwordCheck && touched.passwordCheck}>{errors.passwordCheck}</S_ErrorMessage>
                                </Modal>
                            )}
                        </>
                    )}
                </S_ButtonWrapper>
            </S_MyInfo>
        </S_MyContainer>
    );
}

export default withAuth(Mypage);

const S_MyContainer = styled.section`
    padding: 40px;
    display: grid;
    grid-template-columns: 7fr 3fr;
    gap: 40px;

    @media screen and (max-width: 1441px) {
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
    }
    @media screen and (max-width: 1025px) {
        margin: 0 auto;
        width: 70vw;
        display: flex;
        flex-direction: column;
    }
`;

const S_Content = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    @media screen and (max-width: 1441px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
`;
const S_Subtitle = styled.p`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 8px;
`;
const S_MyInfo = styled.div`
    position: sticky;
    top: 50px;
    align-self: start;

    @media screen and (max-width: 1025px) {
        width: 100%;
        order: -1;
        position: relative;
        top: 0;
    }
`;
const S_MyInfoFigure = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 150px;
        height: 150px;
    }
`;
const S_MyInfoFigcaption = styled.figcaption`
    margin-top: 16px;
    text-align: start;
`;

const S_ButtonWrapper = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: space-around;
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
const ErrorMessage = styled.p<{ visible: boolean }>`
    min-height: 20px;
    margin-top: 5px;
    color: red;
    font-size: 0.8rem;
    text-align: start;
    visibility: ${(props) => (props.visible ? 'visible' : 'none')}; /* 에러가 없을 때는 숨김 */
`;
const S_MyinfoBtn = styled.button<{ red: boolean }>`
    width: 150px;
    height: 40px;
    color: #fff;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => (props.red ? 'rgba(255,0,0,0.7)' : 'rgba(0,0,255,0.7)')};
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.red ? 'rgba(255,0,0,1)' : 'rgba(0,0,255, 1)')};
    }
`;
