"use client"

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default () => {
  const words = useSelector((state: RootState) => state.saveWord.value)
  console.log(words)
  return (<div>
    <h1>Word bank</h1>
    {words.map((word) =><span>{word}</span>)}
  </div>)
}
