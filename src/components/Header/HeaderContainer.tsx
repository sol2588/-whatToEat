import { useState, MouseEvent, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { FiLogOut, FiUser, FiBell, FiMenu } from 'react-icons/fi';
import { logoutSuccess } from '../../redux/reducer/userSlice';
import { useNavigate } from 'react-router-dom';
// import Alarm from '../Alarm/Alarm';
import styled from 'styled-components';
import logo from '../../assets/img/chef-logo.png';
import colors from '../../styles/colors';
import axios from 'axios';
// import fetchSSEHandler from '../../handler/fetchSSEHandler';

interface HeaderProps {
    menuItems: Record<string, string>[];
    isActive: string;
    handleClickMenu: (menu: string) => void;
}

export default function HeaderContainer({ menuItems, handleClickMenu, isActive }: HeaderProps): JSX.Element {
    const [showAlarm, setShowAlarm] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const outSideBar = useRef<HTMLDivElement | null>(null);
    const isLogin = useSelector((state: RootState) => state.user.value.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const { alarmData, setAlarmData } = fetchSSEHandler();
    // const alarmCount = alarmData.length;
    const handleShowAlarm = (e: MouseEvent) => {
        e.stopPropagation();
        setShowAlarm(!showAlarm);
    };

    const handleLogout = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/logout`);
            if (response.data.code == 'OK') {
                dispatch(logoutSuccess());
                navigate('/login');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <S_HaderContainer>
            <S_UserAction>
                {isLogin ? (
                    <S_LoginUserList>
                        <S_StyledLink to="/">
                            <FiLogOut onClick={handleLogout} />
                        </S_StyledLink>
                        <S_StyledLink to="/mypage">
                            <FiUser />
                        </S_StyledLink>
                        <S_BellIconWrapper>
                            <S_BellIcon>
                                <FiBell onClick={handleShowAlarm} />
                                {/* <S_AlaramBadge>{alarmCount}</S_AlaramBadge> */}
                            </S_BellIcon>
                            {/* {showAlarm && <Alarm alarmData={alarmData} changeAlarmData={setAlarmData} />} */}
                        </S_BellIconWrapper>
                    </S_LoginUserList>
                ) : (
                    <>
                        <S_HeaderButton>
                            <Link to="/login">로그인</Link>
                        </S_HeaderButton>
                        <S_HeaderButton>
                            <Link to="signup">회원가입</Link>
                        </S_HeaderButton>
                    </>
                )}
            </S_UserAction>
            <S_Divider />
            <S_HeaderSection onClick={() => setShowAlarm(false)}>
                <S_Link to="/">
                    <img src={logo} alt="LOGO" />
                    <p>오늘 뭐 먹지?</p>
                </S_Link>

                <S_BarIcon onClick={() => setIsOpen((prev) => !prev)} />
                {isOpen && (
                    <S_ResponseWrapper
                        ref={outSideBar}
                        onClick={(e) => {
                            if (e.target == outSideBar.current) setIsOpen(false);
                        }}
                    >
                        <S_ResponseMenu onClick={(e) => e.stopPropagation()}>
                            {menuItems.map((item, idx) => {
                                return (
                                    <S_MenuItem key={item.name + idx} $active={isActive === item.name}>
                                        <S_StyledLink
                                            to={item.to}
                                            onClick={() => {
                                                handleClickMenu(item.name);
                                                setIsOpen(!isOpen);
                                            }}
                                        >
                                            {item.name}
                                        </S_StyledLink>
                                    </S_MenuItem>
                                );
                            })}
                        </S_ResponseMenu>
                    </S_ResponseWrapper>
                )}

                <S_MenuList>
                    {menuItems.map((item, idx) => {
                        return (
                            <S_MenuItem key={item.name + idx} $active={isActive === item.name}>
                                <S_StyledLink to={item.to} onClick={() => handleClickMenu(item.name)}>
                                    {item.name}
                                </S_StyledLink>
                            </S_MenuItem>
                        );
                    })}
                </S_MenuList>
            </S_HeaderSection>
        </S_HaderContainer>
    );
}

const S_HaderContainer = styled.section`
    padding: 16px;
    height: auto;
`;
const S_Divider = styled.div`
    width: 100vw;
    border-bottom: 1px solid #f1f3f5;

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
    }
`;
const S_HeaderSection = styled.div`
    margin: 0 auto;
    width: 80vw;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 1500px) {
        font-size: 22px;
    }
    @media screen and (max-width: 768px) {
        font-size: 22px;
    }
`;
const S_Link = styled(Link)`
    text-decoration: none;
    color: #000;
    img {
        margin-top: 5px;
        width: 90px;
    }
    p {
        display: none;
    }
    @media screen and (max-width: 768px) {
        img {
            display: none;
        }
        p {
            display: block;
        }
    }
`;

const S_MenuList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    justify-content: flex-end;
    display: flex;
    flex-grow: 1;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const S_BarIcon = styled(FiMenu)`
    margin: 0 10px;
    display: none;
    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        display: flex;
    }
`;
const S_ResponseWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
`;
const S_ResponseMenu = styled.ul`
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 20px;

    @media screen and (max-width: 768px) {
        list-style: none;
        height: 100%;
        width: 300px;
        background-color: #ffffff;
        display: block;
    }
`;
const S_MenuItem = styled.li<{ $active: boolean }>`
    margin: 10px;
    cursor: pointer;
    border-bottom: ${(props) => (props.$active ? `3px solid ${colors[300]}` : 'none')};
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        border-bottom: 3px solid ${colors[300]};
    }

    @media screen and (max-width: 768px) {
        margin: 10px;
        padding: 12px 16px;
        font-size: 16px;
        border-bottom: none;
        &:hover {
            border-bottom: none;
            border-radius: 5px;
            background-color: ${colors[100]};
        }
    }
`;
const S_StyledLink = styled(Link)`
    text-decoration: none;
    margin: 10px;
    color: inherit;
    @media screen and (min-width: 1500px) {
        font-size: 24px;
    }
`;
const S_BellIconWrapper = styled.div`
    position: relative;
`;
const S_BellIcon = styled.div`
    margin: 10px;
    cursor: pointer;
    position: relative;
    @media screen and (min-width: 1500px) {
        font-size: 24px;
    }
`;
const S_UserAction = styled.div`
    margin: 0 auto;
    width: 80vw;
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`;
const S_LoginUserList = styled.div`
    display: flex;
    align-items: center;
`;
const S_HeaderButton = styled.div`
    margin-left: 16px;
    font-size: 16px;
    outline: none;
    background-color: transparent;
    a {
        margin: 10px;
        display: inline-block;
        color: #000;
        text-decoration: none;
    }
    @media screen and (min-width: 1500px) {
        font-size: 22px;
    }
`;
// const S_AlaramBadge = styled.span`
//     width: 15px;
//     height: 15px;
//     padding: 2px 4px;
//     font-size: 10px;
//     background-color: red;
//     color: #fff;
//     border-radius: 50%;
//     position: absolute;
//     top: -5px;
//     right: -5px;
//     @media screen and (min-width: 1500px) {
//         width: 20px;
//         height: 20px;
//         font-size: 16px;
//     }
// `;
