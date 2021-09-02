import styled from "styled-components";

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

const Field = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    max-height: 600px;

`

interface Props{
    cards: CardData[];
}

const render = (props: Props)=>{
   const rows = splitToRows(props.cards).map((row)=><Row cards={row}></Row>);

    return (
        <Field>
            {rows}
        </Field>
    )
}

export default render;