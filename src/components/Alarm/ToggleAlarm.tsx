import { useState, useEffect } from 'react';
import useNotify from '../../hooks/useNotify';
import styled from 'styled-components';

export default function ToggleAlarm({ id }: { id: number }) {
    const [isOn, setIsOn] = useState(true);
    const { toggleNotify } = useNotify();

    useEffect(() => {
        toggleNotify(id);
    }, [id]);

    return (
        <>
            <S_ToggleBtn onClick={() => setIsOn((prev) => !prev)} isOn={isOn}>
                {isOn ? <S_MarkToggle isOn={isOn}>ON</S_MarkToggle> : <S_MarkToggle isOn={isOn}>OFF</S_MarkToggle>}
                <S_Circle isOn={isOn} />
            </S_ToggleBtn>
        </>
    );
}

const S_ToggleBtn = styled.button<{ isOn: boolean }>`
    width: 35px;
    height: 15px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background-color: ${(props) => (props.isOn ? '#ff9900' : '')};
    position: relative;
    display: flex;
    align-items: center;
    transition: all 0.5s ease-in-out;
`;
const S_MarkToggle = styled.span<{ isOn: boolean }>`
    font-size: 10px;
    padding: ${(props) => (props.isOn ? '0 6px' : '0 0 0 12px')};
`;
const S_Circle = styled.div<{ isOn: boolean }>`
    background-color: white;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    position: absolute;
    left: 5%;
    transition: ${(props) => (props.isOn ? 'all 0.5s ease-in-out' : 'all 0.5s ease-in-out;')};
    transform: ${(props) => (props.isOn ? 'translate(20px, 0)' : '')};
`;
