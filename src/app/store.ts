import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import fieldReducer from '../components/field/fieldSlice';
import leaderboardReducer from '../components/leaderboard/leaderboardSlice';

export const store = configureStore({
  reducer: {
    field: fieldReducer,
    leaderboard: leaderboardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
