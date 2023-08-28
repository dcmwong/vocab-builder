import produce from 'immer'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: Array<string>
}

const initialState: InitialState = {
  value: [],
}

export const clearWord = createSlice({
  name: "keywords",
  initialState,
  reducers: {
    clearWords: (state, action: PayloadAction<string>) => {
      console.log(state)
      const nextState = produce(state, (draft) => { draft.value = [] })
      return nextState
    }
  }
});

export const { clearWords } = clearWord.actions
export default clearWord.reducer;
