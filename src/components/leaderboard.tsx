import styled from 'styled-components';

import { LeaderBoardItem } from '../models/leaderboard-item';

const LeaderBoard = styled.div`
    position: absolute;
    min-width: 200px;
    min-width: 300px;
    max-width: 400px;
    max-height: 600px;
`

interface Props{
    list: LeaderBoardItem[];
}

const render = ({list}: Props) => {
    return (
        <LeaderBoard />
    )
}

export default render;