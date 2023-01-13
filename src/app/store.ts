import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { roomSlice } from "../features/room/room.slice";

export const store = configureStore({
  reducer: {
    [roomSlice.name]: roomSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<T = void> = ThunkAction<
  T,
  RootState,
  unknown,
  Action<string>
>;
