import styled from "styled-components";

import { CardData} from '../models/card';
import Card from './card';

const Field = styled.div`
    max-width: 1400px;
    max-height: 600px;
`

interface Props{
    cards: CardData[];
}

const render = (props: Props)=>{
    const cards = props.cards.map((card)=> <Card card={card}/>)

    return (
        <Field>
            {cards}
        </Field>
        
    )
}

export default render;