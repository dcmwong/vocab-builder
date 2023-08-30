"use client"

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store'
import { postWordsToDb } from '../store/features/words/wordsSlice';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default () => {
  const dispatch: AppDispatch = useDispatch()
  const words = useSelector((state: RootState) => state.saveWord?.value || [])
  return (
    <>
      <div className="flex gap-1">
        {words.map((word, i) =>
          <div key={`${word}-${i}`} className="bg-orange-500 text-white rounded-full px-4 py-2 flex items-center justify-between">
            <span className="mr-2">{word}</span>
            <button className="text-white text-lg hover:text-red-500">
              &times;
            </button>
          </div>)}
      </div>
      {words.length > 0 && (<div><button className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700 mr-2 mt-4"
        onClick={() => dispatch(postWordsToDb(words))}>Save words</button>
      </div>)}
    </>)
}
