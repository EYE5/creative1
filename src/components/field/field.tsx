import styled from "styled-components";
import useTimer from 'easytimer-react-hook';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectCards, selectGameInfo, play, setTime } from './fieldSlice';
import { CardData} from '../../models/card';
import Row from '../row';
import Timer from '../timer';

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
    
`

const InputContainerStyled = styled.div`
    display:flex;
    flex-direction: row;
`

const Field = ()=>{
    const cards = useAppSelector(selectCards);
    const gameInfo = useAppSelector(selectGameInfo)
    const dispatch = useAppDispatch();
    const [playerName, setPlayerName] = useState('');

    const rows = splitToRows(cards).map((row, idx) => <Row cards={row} gameInfo={gameInfo} key={idx}></Row>);
    
    const [timer] = useTimer();

    const start = () => {
        dispatch(play())
        timer.start();
    }

    const time = timer.getTimeValues().toString();

    useEffect(() => {
        dispatch(setTime(time))
    }, [time])

    return (
        <FieldStyled>
            {rows}
            <InputContainerStyled>
                <input type="text" value={playerName} onChange={ (e)=> setPlayerName(e.target.value) }/>
                <button onClick={()=> start()}>Play</button>
            </InputContainerStyled>
            <Timer time={ time }/>
           
        </FieldStyled>
    )
}

export default Field;