import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type StoryState = {
  story: string
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}

const initialState: StoryState = {
  story: '',
  status: 'idle',
  error: null
}
export const fetchStory = createAsyncThunk('story/getStory', async () => {
  const data = await fetch("http://localhost:3002/api/getStory");
  const storyText = (await data.json()).storyText
  return storyText
});

export const story = createSlice({
  name: "story",
  initialState,
  reducers: {
    getStory: (state, action: PayloadAction<string>) => {
      state.story = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.story = action.payload;
      })
      .addCase(fetchStory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message ?? null;
      });
  },
});

export const { getStory } = story.actions
export default story.reducer;

