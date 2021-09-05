import styled from "styled-components";

import { useAppSelector, useAppDispatch } from '../app/hooks';
import { play, selectGameInfo } from './field/fieldSlice';
import { GameStatus } from "../models/game-info";

const AlertContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    display: ${(props: {display: boolean})=> props.display ? 'flex' : 'none'};
    flex-direction: row;
    width:100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const AlertStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 380px;
    height: 120px;
    background-color: #02ad02;
    border-radius: 15px;
    padding: 20px;
    color: white
`

const ButtonStyled = styled.button`
    background-color: #33d651;
    outline: none;
    border: none;
    width: 120px;
    border-radius: 5px;
    color: white;
    -webkit-appearance: none;
    height: 30px;
    :hover{
        background-color: #028002;
        cursor: pointer;
    }
`

const Alert = () => {
    const dispatch = useAppDispatch()
    const gameState = useAppSelector(selectGameInfo)

    const display = gameState.gameStatus === GameStatus.END;

    return (
        <AlertContainer display={display}>
            <AlertStyled >
                <h4>Вы открыли все карточки, попробовать еще раз?</h4>
                 <ButtonStyled onClick={()=>dispatch(play())}>Играть</ButtonStyled>
            </AlertStyled>
        </AlertContainer>
    )
}

export default Alert;