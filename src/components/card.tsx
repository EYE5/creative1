import styled from 'styled-components';

import { CardData } from '../models/card';

const Card = styled.div`
    min-width: 50px;
    min-height: 60px;
    width: 80px;
    height: 100px;
    max-width: 150px;
    max-height: 180px;
    background-image: url(${(props: CardData)=> props.image});
    background-size:100% 100%;

    

   
`

type Props = CardData;

const render = ({image, isOpened}: Props) => {
    
    return (
        <Card image={image} isOpened={isOpened}/>
          
       
    )
}

export default render;