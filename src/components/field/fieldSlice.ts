import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { CardData } from '../../models/card';
import { GameInfo, GameStatus } from '../../models/game-info';
import { cards } from '../../data';
import { shuffle } from '../../utils/array-shuffle';

export interface CounterState {
  cards: CardData[];
  cardsOpened: CardData[];
  gameInfo: GameInfo;
}

const initialState: CounterState = {
  cards: shuffle(cards) as CardData[],
  cardsOpened: [],
  gameInfo: {
    gameStatus: GameStatus.START,
    playerName: '',
    playerTime: '00:00:00',
  },
};

export const counterSlice = createSlice({
  name: 'field',
  initialState,
  reducers: {
    openCard: (state, action: PayloadAction<number>) => {
      if (state.cardsOpened.length === 2) throw new Error('Already open 2 cards');

      const idx = state.cards.findIndex(card => card.id === action.payload);

      if (state.cards[idx].isOpened) throw new Error('This card is already opened');

      state.cards[idx].isOpened = true;
      state.cardsOpened.push(state.cards[idx]);

      if (state.cardsOpened.length === 2 && state.cardsOpened[0].image === state.cardsOpened[1].image) {
        const sIdx = state.cards.findIndex(card => card.id === state.cardsOpened[0].id);

        state.cards[idx].double = true;
        state.cards[sIdx].double = true;
        state.cardsOpened = [];
      }

      if (!state.cards.filter(card => !card.isOpened).length) state.gameInfo.gameStatus = GameStatus.END;
    },
    closeCard: (state, action: PayloadAction<number>) => {
      const idx = state.cards.findIndex(card => card.id === action.payload);

      if (state.cards[idx].double) return;

      state.cards[idx].isOpened = false;
      state.cardsOpened.shift();
    },
    play: (state, action: PayloadAction<string>) => {
      state.cards.forEach(card => {
        card.isOpened = false;
        card.double = false;
      });
      state.cards = shuffle(state.cards) as CardData[];
      state.gameInfo.gameStatus = GameStatus.PLAYING;
      state.cardsOpened = [];
      state.gameInfo.playerName = action.payload;
    },
    setTime: (state, action: PayloadAction<string>) => {
      state.gameInfo.playerTime = action.payload;
    },
  },
});

export const { openCard, closeCard, play, setTime } = counterSlice.actions;

export const selectCards = (state: RootState) => state.field.cards;
export const selectGameInfo = (state: RootState) => state.field.gameInfo;

export default counterSlice.reducer;
