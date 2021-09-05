import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { Player } from '../../models/player';

export interface CounterState {
  players: Player[];
}

const initialState: CounterState = {
  players: [],
};

export const counterSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<Player>) {
      state.players.push(action.payload);
    },
  },
});

export const { addPlayer } = counterSlice.actions;

export const selectPlayers = (state: RootState) => state.leaderboard.players;

export default counterSlice.reducer;
