import { store } from '../../../store'
import { clearWords } from '../clear-words-slice'
import { saveWord } from '../save-word-slice'

describe('save-word-slice', () => {
  it('should save given word to store', () => {
    const state = store.getState().saveWord
    expect(state.value).toHaveLength(0)

    store.dispatch(saveWord('test'))
    const expectedState = store.getState().saveWord

    expect(expectedState.value).toHaveLength(1)
  })
  it('given save given word to store twice should not allow', () => {
    const state = store.getState().saveWord
    expect(state.value).toHaveLength(0)

    store.dispatch(saveWord('test'))
    store.dispatch(saveWord('test'))
    const expectedState = store.getState().saveWord

    expect(expectedState.value).toHaveLength(1)
  })
})

