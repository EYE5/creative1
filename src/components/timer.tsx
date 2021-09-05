import styled from "styled-components";
const TimerStyled = styled.div`
    position: absolute;
    left: 10px;
    font-size: 30px;
    color: #33d651;
    font-weight:600;

`

interface Props{
    time: string;
}

const Timer = ({time}: Props) => {
    
    return (
        <TimerStyled> {time} </TimerStyled>
    )
}

export default Timer;