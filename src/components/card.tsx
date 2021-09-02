import styled from 'styled-components';

import { CardData } from '../models/card';

const Card = styled.div`
    max-width: 50px;
    max-height: 100px;
`

interface Props{
    card: CardData;
}

const render = (props: Props) => {
    
    return (
        <Card />
    )
}

export default render;