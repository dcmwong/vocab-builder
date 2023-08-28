"use client"

import { store } from '../store'
import { saveWord } from '../store/features/save-word-slice'

export default ({ storyText }) => {
  return (<div>
    {`${storyText}`}
    <button className="bg-gray-500 round-xl" onClick={() => store.dispatch(saveWord('test'))}>Save Word</button>
  </div>)
}
