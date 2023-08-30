"use client"

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../components/Loading'
import { RootState, store } from '../store'
import { saveWord } from '../store/features/words/wordsSlice'


const Word = ({ word }: { word: string }) =>
  <>
    <button
      onClick={(e) => {
        e.preventDefault()
        store.dispatch(saveWord(word))
      }}
      className="transition duration-300 hover:bg-transparent hover:text-blue-500 hover:underline">
      {word}
    </button>&nbsp;
  </>


export default () => {
  const story = useSelector((state: RootState) => state.story)

  return story.status === 'loading' ?
    (<Loading />
    )
    :
    (<div className="">
      {story.story.split(' ').map((word: string, i) => <Word key={`${word}-${i}`} word={word} />)}
    </div>)
}
