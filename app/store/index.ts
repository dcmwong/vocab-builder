import { configureStore } from '@reduxjs/toolkit'
import saveWord from './features/save-word-slice';
import clearWords from './features/clear-words-slice';

export const store = configureStore({
  reducer: {
    saveWord: saveWord,
    clearWords: clearWords
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

