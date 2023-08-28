import produce from 'immer'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: Array<string>
}

const initialState: InitialState = {
  value: [],
}

export const save = createSlice({
  name: "keywords",
  initialState,
  reducers: {
    saveWord: (state, action: PayloadAction<string>) => {
      console.log(state)
      const nextState = produce(state, (draft) => { draft.value.push(action.payload) })
      return nextState
    }
  }
});

export const { saveWord } = save.actions
export default save.reducer;
