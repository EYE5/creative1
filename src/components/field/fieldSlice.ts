import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { CardData } from '../../models/card';
import { cards } from '../../data';
import { shuffle } from '../../utils/array-shuffle';

export interface CounterState {
  cards: CardData[];
  cardsOpened: CardData[];
  score: number;
  isGameOver: boolean;
}

const initialState: CounterState = {
  cards: shuffle(cards) as CardData[],
  cardsOpened: [],
  score: 0,
  isGameOver: false,
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
        state.score += 2;
        const sIdx = state.cards.findIndex(card => card.id === state.cardsOpened[0].id);

        state.cards[idx].double = true;
        state.cards[sIdx].double = true;
        state.cardsOpened = [];
      }

      if (!state.cards.filter(card => !card.isOpened).length) state.isGameOver = true;
    },
    closeCard: (state, action: PayloadAction<number>) => {
      const idx = state.cards.findIndex(card => card.id === action.payload);

      if (state.cards[idx].double) return;

      state.cards[idx].isOpened = false;
      state.cardsOpened.shift();
    },
    play: state => {
      state.cards.forEach(card => (card.isOpened = false));
      state.cards = shuffle(state.cards) as CardData[];
      state.score = 0;
      state.cardsOpened = [];
      state.isGameOver = false;
    },
  },
});

export const { openCard, closeCard, play } = counterSlice.actions;

export const selectCards = (state: RootState) => state.field.cards;
export const selectScore = (state: RootState) => state.field.score;
export const selectGameState = (state: RootState) => state.field.isGameOver;

export default counterSlice.reducer;
