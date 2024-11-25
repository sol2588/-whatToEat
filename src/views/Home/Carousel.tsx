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
    const [percent, setPercent] = useState(35);
    const carouselRef = useRef<HTMLUListElement>(null);

    // currIdx가 바뀔때마다 translateX만큼 이동
    useEffect(() => {
        if (carouselRef.current != null) {
            carouselRef.current.style.transform = `translateX(-${currIdx * percent}%)`;
        }
    }, [currIdx]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 769) {
                setPercent(100);
            } else if (window.innerWidth > 768 && window.innerWidth < 1441) {
                setPercent(50);
            } else {
                setPercent(35);
            }
        };
        window.addEventListener('resize', handleResize);
    }, [percent]);

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

    return (
        <Container>
            <CarouselWrapper>
                <CarouselList ref={carouselRef}>
                    {makeNewList().map((item: ImgProps, idx: number) => (
                        <CarouselItem key={idx} $active={idx == currIdx}>
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
    width: 100%;
    display: flex;
    align-items: center;
`;
const CarouselWrapper = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
`;
const BtnWrapper = styled.div`
    padding: 0 40px;
    width: 100%;
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
    width: 100%;
    display: flex;
    gap: 20px;
    li {
        flex: none;
    }
    @media screen and (max-width: 1441px) {
        gap: 0;
    }
    @media screen and (max-width: 769px) {
        gap: 0;
    }
`;

const CarouselItem = styled.li<{ $active: boolean }>`
    display: flex;
    flex-direction: column;
    width: 33%;
    height: 80%;
    overflow: hidden;
    filter: ${(props) => (props.$active ? 'brightness(100%)' : 'brightness(50%)')};
    img {
        width: 310px;
        height: 480px;
        object-fit: fit;
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

    @media screen and (max-width: 1441px) {
        align-items: center;
        width: 50%;
        img {
            width: 95%;
            height: 480px;
            object-fit: fit;
        }
        p {
            margin: 10px 0 15px;
            width: 95%;
        }
    }
    @media screen and (max-width: 769px) {
        margin-top: 20px;
        align-items: center;
        width: 100%;
        img {
            width: 100%;
            max-width: 350px;
            height: 430px;
            object-fit: fit;
        }
        p {
            max-width: 350px;
            margin: 10px 0 15px;
        }
    }
`;
