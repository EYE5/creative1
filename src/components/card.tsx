import styled from 'styled-components';

import { CardData } from '../models/card';
import { useAppDispatch } from '../app/hooks';
import { openCard, closeCard } from '../components/field/fieldSlice';
import { CARD_TIMEOUT } from '../constants';

const CardStyled = styled.div`
    min-width: 50px;
    min-height: 60px;
    width: 80px;
    height: 100px;
    max-width: 150px;
    max-height: 180px;
    background-image: url(${(props: {image: string; isOpened: boolean})=> !props.isOpened ? '../img/background.svg' : props.image});
    background-size: 100% 100%;
    border: 1px solid black;
    border-radius: 5px;
    margin: 2px;
    transition: .5s;
`

type Props = Omit<CardData, 'double'>;

const Card = ({image, isOpened, id}: Props) => {  
    const dispatch = useAppDispatch();

    const toggleCard = (id: number)=>{
        try{
            dispatch(openCard(id));
        } catch(error){
            return;
        }
        
        setTimeout(()=>dispatch(closeCard(id)), CARD_TIMEOUT)
    }

    return (
        <CardStyled image={image} isOpened={isOpened} onClick={()=> toggleCard(id)}/>
    )
}

export default Card;