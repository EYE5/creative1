import styled from 'styled-components'

import { CardData } from '../models/card';
import { GameInfo, GameStatus } from '../models/game-info';
import Card from './card';


const Row = styled.div`
    display: flex;
    flex-direction: row;
`

interface Props{
    cards: CardData[];
    gameInfo: GameInfo;
}

const render = (props: Props)=>{
    const cards = props.cards.map((card) =>
        <Card image={card.image} isOpened={card.isOpened} id={card.id} key={card.id} disabled={props.gameInfo.gameStatus === GameStatus.START} />)

    return (
        <Row>
            {cards}
        </Row>
    )
}

export default render;