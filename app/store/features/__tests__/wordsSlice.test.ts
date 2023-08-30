import reducer, { InitialState, saveWord } from '../words/wordsSlice'

describe.only('save-word-slice', () => {
  it('should save given word to store', () => {
    const previousState: InitialState = { value: [], status: 'succeeded', error: null }
    expect(reducer(previousState, saveWord('tests'))).toEqual({ value: ['tests'], status: 'succeeded', error: null }
    )
  })
  it('should not save the same word to store', () => {
    const previousState: InitialState = { value: [], status: 'succeeded', error: null }
    const nextState = reducer(previousState, saveWord('tests'))
    const expected = reducer(nextState, saveWord('tests'))
    expect(expected).toEqual({ value: ['tests'], status: 'succeeded', error: null })
  });
});
