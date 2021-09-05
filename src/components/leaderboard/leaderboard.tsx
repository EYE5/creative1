import styled from "styled-components";

import { useAppSelector } from '../../app/hooks';
import { Player } from "../../models/player";
import { selectPlayers } from './leaderboardSlice';

const LeaderboardStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 10px;
    width: 300px;
    min-height: 120px;
    max-height:630px;
    margin-top:2px;
    border-radius: 5px;
    padding: 0 10px 10px 10px;
    list-style-type: none;
    background: #33d651;


`

const sort = (a: Player, b: Player)=> Number(a.playerTime.split(':').join('')) - Number(b.playerTime.split(':').join(''))

const Leaderboard = () => {
    const players = useAppSelector(selectPlayers);

    const playersList = [...players].sort(sort).map((player, index) => <li key={index}>{index + 1}.  {player.playerName} {player.playerTime}</li>)
    
    return (
        <LeaderboardStyled>
            <h3>Leaderboard</h3>
            {playersList.length ? playersList : 'No records'}
        </LeaderboardStyled>
    )
}

export default Leaderboard;