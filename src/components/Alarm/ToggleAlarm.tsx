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
            <ToggleBtn onClick={(prev) => setIsOn(!prev)} isOn={isOn}>
                <Circle isOn={isOn} />
            </ToggleBtn>
        </>
    );
}

const ToggleBtn = styled.button<{ isOn: boolean }>`
    width: 50px;
    height: 25px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background-color: ${(props) => (props.isOn ? '#ff9900' : '')};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
`;
const Circle = styled.div<{ isOn: boolean }>`
    background-color: white;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    position: absolute;
    left: 5%;
    transition: ${(props) => (props.isOn ? 'all 0.5s ease-in-out' : 'all 0.5s ease-in-out;')};
    transform: ${(props) => (props.isOn ? 'translate(25px, 0)' : '')};
`;
