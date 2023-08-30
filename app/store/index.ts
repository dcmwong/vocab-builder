import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import saveWord from './features/words/wordsSlice';
import getStory from './features/story/storySlice';

const rootReducer = combineReducers({
  story: getStory,
  saveWord: saveWord,
});

export const store = configureStore({
  reducer: rootReducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch;

