import styled from 'styled-components';
import { HiListBullet, HiOutlinePencilSquare, HiOutlineHeart } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <S_BarContainer>
            <S_BarHeader>
                <h5>Menus</h5>
            </S_BarHeader>
            <S_BarList>
                <S_BarItem>
                    <HiOutlinePencilSquare />
                    <Link to="/recipes/create">레시피 작성</Link>
                </S_BarItem>
                <S_BarItem>
                    <HiOutlineHeart />
                    <Link to="/mypage">찜목록 보기</Link>
                </S_BarItem>
                <S_BarItem>
                    <HiListBullet />
                    <Link to="/mypage">레시피 보기</Link>
                </S_BarItem>
            </S_BarList>
        </S_BarContainer>
    );
}

const S_BarContainer = styled.div`
    padding: 30px;
`;
const S_BarHeader = styled.div`
    width: 100%;
    font-weight: 600;
    font-size: 18px;
    color: #fff;
    background-color: #1f2532;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    h5 {
        padding: 5px 15px;
    }
`;
const S_BarList = styled.ul`
    list-style: none;
    padding-bottom: 10px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    display: flex;
    justify-content: space-around;
`;
const S_BarItem = styled.li`
    padding-top: 8px;
    margin-top: 8px;
    position: relative;
    display: flex;
    align-items: center;
    &:hover {
        color: #0288d1;
    }
    &::after {
        content: '';
        width: 100%;
        position: absolute;
        bottom: 0;
        border-bottom: 0.8px solid #656565;
    }
    a {
        margin-left: 5px;
        text-decoration: none;
        color: #1f2532;
    }
    a:hover {
        color: #0288d1;
    }
`;
