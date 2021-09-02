import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { CardData } from '../../models/card';

export interface CounterState {
  cards: CardData[]
  secondOpened: boolean;
}

const initialState: CounterState = {
  cards: [
    {image:'../img/1.svg', isOpened: false, id: 1},
    {image:'../img/2.svg', isOpened: false, id: 2},
    {image:'../img/3.svg', isOpened: false, id: 3}, 
    {image:'../img/4.svg', isOpened: false, id: 4},
    {image:'../img/5.svg', isOpened: false, id: 5},
    {image:'../img/6.svg', isOpened: false, id: 6},
    {image:'../img/7.svg', isOpened: false, id: 7},
    {image:'../img/8.svg', isOpened: false, id: 8},
    {image:'../img/9.svg', isOpened: false, id: 9}, 
    {image:'../img/10.svg', isOpened: false, id: 10},
    {image:'../img/11.svg', isOpened: false, id: 11},
    {image:'../img/12.svg', isOpened: false, id: 12},
    {image:'../img/13.svg', isOpened: false, id: 13},
    {image:'../img/14.svg', isOpened: false, id: 14},
    {image:'../img/15.svg', isOpened: false, id: 15}, 
    {image:'../img/16.svg', isOpened: false, id: 16},
    {image:'../img/17.svg', isOpened: false, id: 17},
    {image:'../img/18.svg', isOpened: false, id: 18},
    {image:'../img/1.svg', isOpened: false, id: 19},
    {image:'../img/2.svg', isOpened: false, id: 20},
    {image:'../img/3.svg', isOpened: false, id: 21},
    {image:'../img/4.svg', isOpened: false, id: 22},
    {image:'../img/5.svg', isOpened: false, id: 23}, 
    {image:'../img/6.svg', isOpened: false, id: 24},
    {image:'../img/7.svg', isOpened: false, id: 25},
    {image:'../img/8.svg', isOpened: false, id: 26},
    {image:'../img/9.svg', isOpened: false, id: 27},
    {image:'../img/10.svg', isOpened: false, id: 28},
    {image:'../img/11.svg', isOpened: false, id: 29}, 
    {image:'../img/12.svg', isOpened: false, id: 30},
    {image:'../img/13.svg', isOpened: false, id: 31},
    {image:'../img/14.svg', isOpened: false, id: 32},
    {image:'../img/15.svg', isOpened: false, id: 33},
    {image:'../img/16.svg', isOpened: false, id: 34},
    {image:'../img/17.svg', isOpened: false, id: 35}, 
    {image:'../img/18.svg', isOpened: false, id: 36},
    ],
    secondOpened: false
};

export const counterSlice = createSlice({
  name: 'field',
  initialState,

  reducers: {
    openCard: (state, action: PayloadAction<number>) => {
        if(state.secondOpened) return;

        if(state.cards.some((card) => card.isOpened)){


            state.secondOpened = true
        };

        const idx = state.cards.findIndex((card)=> card.id === action.payload);

        state.cards[idx].isOpened = true;       
    },
    closeCard: (state, action: PayloadAction<number>) =>{
        const idx = state.cards.findIndex((card)=> card.id === action.payload);

        state.cards[idx].isOpened = false;
        state.secondOpened = false;
    }
  },

});

export const { openCard, closeCard } = counterSlice.actions;

export const selectCards = (state: RootState) => state.field.cards;

export default counterSlice.reducer;
