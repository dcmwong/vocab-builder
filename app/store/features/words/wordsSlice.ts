import produce from 'immer'
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialState = {
  value: Array<string>
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}

const initialState: InitialState = {
  value: [],
  status: 'idle',
  error: null
}
export const fetchWords = createAsyncThunk('words/getWords', async () => {
  const data = await fetch("http://localhost:3002/api/words");
  const words = (await data.json()).words
  return words
});

export const postWordsToDb = createAsyncThunk(
  'words/postWords',
  async (itemsArray, thunkAPI) => {
    const response = await fetch('http://localhost:3002/api/words', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ words: itemsArray }),
    });

    if (!response.ok) {
      return thunkAPI.rejectWithValue(await response.json());
    }
  }
);

export const save = createSlice({
  name: "keywords",
  initialState,
  reducers: {
    saveWord: (state, action: PayloadAction<string>) => {
      const nextState = produce(state, (draft) => {
        if (state.value.indexOf(action.payload) < 0) {
          draft.value.push(action.payload)
        }
      })
      return nextState
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWords.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        const nextState = produce(state, (draft) => {
          console.log(action.payload)
          draft.value = action.payload
          draft.status = 'succeeded'
        })
        return nextState
      })
      .addCase(fetchWords.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message ?? null;
      })
      .addCase(postWordsToDb.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postWordsToDb.fulfilled, (state, action) => {
        const nextState = produce(state, (draft) => {
          draft.value.push(action.payload)
          draft.status = 'succeeded'
        })
        return nextState
      })
      .addCase(postWordsToDb.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message ?? null;
      });
  },
});

export const { saveWord } = save.actions
export default save.reducer;

