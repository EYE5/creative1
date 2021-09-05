import styled from "styled-components";
import useTimer from 'easytimer-react-hook';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCards, selectGameInfo, play, setTime } from './fieldSlice';
import {addPlayer } from '../leaderboard/leaderboardSlice'

import { CardData } from '../../models/card';

import Row from '../row';
import Timer from '../timer';
import Leaderboard from "../leaderboard/leaderboard";
import { GameStatus } from "../../models/game-info";

function splitToRows(cards: CardData[]){
    const rows = [];
    let temp = [];

    for(let iter = 0; iter < cards.length; iter++){
        temp.push(cards[iter]);

        if((iter + 1) % 6 === 0){
            rows.push(temp);
            temp = [];
        }
    }

    return rows;
}

const FieldStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
    max-height: 700px;
    font-family: 'Segoe UI'
    
`

const InputContainerStyled = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: 10px;
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
    margin-left: 5px;
    :hover{
        background-color: #028002;
        cursor: pointer;
    }
`

const Field = ()=>{
    const cards = useAppSelector(selectCards);
    const gameInfo = useAppSelector(selectGameInfo)
    const dispatch = useAppDispatch();
    const [playerName, setPlayerName] = useState('');

    const rows = splitToRows(cards).map((row, idx) => <Row cards={row} gameInfo={gameInfo} key={idx}></Row>);
    
    const [timer] = useTimer();

    const start = () => {
        dispatch(play(playerName))
        timer.start();
    }

    const time = timer.getTimeValues().toString();

    useEffect(() => {
        dispatch(setTime(time))
    }, [time])

    useEffect(() => {
        if (gameInfo.gameStatus === GameStatus.END) {
            dispatch(addPlayer({ playerName: gameInfo.playerName, playerTime: gameInfo.playerTime }))
            timer.stop();
        }
    } , [gameInfo.gameStatus])

    return (
        <FieldStyled>
            <Timer time={time} />
            {rows}
            <InputContainerStyled>
                <input type="text" placeholder="Player name" value={playerName} onChange={ (e)=> setPlayerName(e.target.value) }/>
                <ButtonStyled onClick={() => start()}>Play</ButtonStyled>
            </InputContainerStyled>
            
            <Leaderboard />
           
        </FieldStyled>
    )
}

export default Field;