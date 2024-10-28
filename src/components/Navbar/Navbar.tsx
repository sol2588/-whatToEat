import { HiListBullet, HiOutlinePencilSquare, HiOutlineHeart } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function NavBar() {
    return (
        <S_BarContainer>
            <S_BarWrapper>
                <S_BarList>
                    <S_BarItem>
                        <HiListBullet />
                        <Link to="/recipes/create">게시글 작성</Link>
                    </S_BarItem>
                    <S_BarItem>
                        <HiOutlineHeart />
                        <Link to="/mypage">찜목록 보기</Link>
                    </S_BarItem>
                    <S_BarItem>
                        <HiOutlinePencilSquare />
                        <Link to="/mypage">작성글 보기</Link>
                    </S_BarItem>
                </S_BarList>
            </S_BarWrapper>
        </S_BarContainer>
    );
}

const S_BarContainer = styled.div`
    width: 35%;
    position: fixed;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (min-width: 1249px) {
        top: 14%;
    }
`;
const S_BarWrapper = styled.div`
    padding: 14px 12px;
    border-radius: 8px;
    backdrop-filter: blur(24px);
    border: 1px solid rgba(0, 0, 0, 0.12);
    background-color: rgba(250, 250, 250, 0.4);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
`;

const S_BarList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const S_BarItem = styled.li`
    margin: 0px 10px;
    display: flex;

    &:hover,
    a:hover {
        color: #0288d1;
    }

    a {
        margin-left: 5px;
        text-decoration: none;
        color: #1f2532;
    }
`;
