import styled from "styled-components";

import { useAppSelector } from '../../app/hooks';
import { selectCards } from './fieldSlice';
import { CardData} from '../../models/card';
import Row from './row';

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
    max-width: 1400px;
    max-height: 600px;

`

const Field = ()=>{
    const cards = useAppSelector(selectCards);    
    const rows = splitToRows(cards).map((row, idx)=><Row cards={row} key={idx}></Row>);

    return (
        <FieldStyled>
            {rows}
        </FieldStyled>
    )
}

export default Field;