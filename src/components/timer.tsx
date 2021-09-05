import styled from "styled-components";
const TimerStyled = styled.div`
    position: absolute;
    left: 10px;
    font-size: 30px;
    background: #33d651;
    color:black;
    font-weight:600;
    border-radius:5px;
    width: 200px;
    padding: 20px;

`

interface Props{
    time: string;
}

const Timer = ({time}: Props) => {
    
    return (
        <TimerStyled>Time: {time} </TimerStyled>
    )
}

export default Timer;