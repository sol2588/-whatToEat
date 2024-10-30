import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

interface ImgProps {
    url: string;
    content: string;
}
interface CarouselProps {
    carouselLists: ImgProps[];
}

export default function Carousel({ carouselLists }: CarouselProps) {
    const [currIdx, setCurrIdx] = useState(1);
    const carouselRef = useRef<HTMLUListElement>(null);

    // currIdx가 바뀔때마다 translateX만큼 이동
    useEffect(() => {
        if (carouselRef.current != null) {
            carouselRef.current.style.transform = `translateX(-${currIdx * 35}%)`;
        }
    }, [currIdx]);

    // 마지막 아이템, 첫번째, 두번째 아이템 복제(화면에 3개씩 렌더링)
    // translate 효과를 없애준다음 실제로 이동해야하는 첫번째 아이템 / 마지막 아이템으로 이동
    const makeNewList = () => {
        const start = carouselLists.slice(0, 2);
        const end = carouselLists[carouselLists.length - 1];
        const newList: ImgProps[] = [end, ...carouselLists, ...start];
        return newList;
    };

    const handleButton = (direction: number) => {
        const newIdx = currIdx + direction;
        setCurrIdx(newIdx);

        if (newIdx === carouselLists.length + 1) {
            moveToSlide(1);
        } else if (newIdx === 0) {
            moveToSlide(carouselLists.length);
        }

        if (carouselRef.current != null) {
            carouselRef.current.style.transition = 'all 0.5s ease-in-out';
        }
    };

    const moveToSlide = (index: number) => {
        setTimeout(() => {
            setCurrIdx(index);
            if (carouselRef.current != null) {
                carouselRef.current.style.transition = '';
            }
        }, 500);
    };
    console.log(currIdx);

    return (
        <Container>
            <CarouselWrapper>
                <CarouselList ref={carouselRef}>
                    {makeNewList().map((item: ImgProps, idx: number) => (
                        <CarouselItem key={idx} active={idx == currIdx}>
                            <img src={item.url} />
                            <p>{item.content}</p>
                        </CarouselItem>
                    ))}
                </CarouselList>
                <BtnWrapper>
                    <button type="button" onClick={() => handleButton(-1)}>
                        <FaArrowAltCircleLeft />
                    </button>
                    <button type="button" onClick={() => handleButton(1)}>
                        <FaArrowAltCircleRight />
                    </button>
                </BtnWrapper>
            </CarouselWrapper>
        </Container>
    );
}

const Container = styled.div`
    padding: 30px 20px 30px 0px;
    display: flex;
    width: 100%;
    background-color: #d8dced;
    align-items: center;
`;
const CarouselWrapper = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
`;
const BtnWrapper = styled.div`
    margin: 0 auto;
    width: 350px;
    display: flex;
    justify-content: space-between;

    button {
        border: none;
        color: #3f51b5;
        background-color: inherit;
        font-size: 20px;
        cursor: pointer;
    }
`;

const CarouselList = styled.ul`
    display: flex;
    gap: 20px;
    width: 100%;
    li {
        flex: none;
    }
`;

const CarouselItem = styled.li<{ active: boolean }>`
    display: flex;
    flex-direction: column;
    width: 33%;
    height: 80%;
    border-radius: 16px;
    overflow: hidden;
    filter: ${(props) => (props.active ? 'brightness(100%)' : 'brightness(50%)')};
    transform: ${(props) => (props.active ? 'scale(1)' : 'scale(0.9)')};
    transition: all ease 0.9s;
    img {
        width: 310px;
        height: 480px;
        object-fit: fill;
    }
    p {
        margin: 10px 30px 15px;
        max-width: 250px;
        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        opacity: 0.8;
        text-align: center;
        word-break: keep-all;
    }
`;
