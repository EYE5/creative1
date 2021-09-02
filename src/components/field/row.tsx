import styled from 'styled-components'

import { CardData} from '../../models/card';
import Card from '../card';

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

interface Props{
    cards: CardData[];
}

const render = (props: Props)=>{
    const cards = props.cards.map((card)=> <Card image={card.image} isOpened={card.isOpened}/>)

    return (
        <Row>
            {cards}
        </Row>
    )
}

export default render;