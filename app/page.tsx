"use client"
import { Card, Title, Text } from '@tremor/react';
import Story from './components/Story';
import Words from './components/Words';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchStory } from './store/features/story/storySlice';
import { fetchWords } from './store/features/words/wordsSlice';
import { AppDispatch } from './store';

export default async function IndexPage() {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStory())
    dispatch(fetchWords())
  }, [])

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Your story for today</Title>
      <Text>
        Read the story below.  If you find any words that are tricky then click on it and it to the word bank.
      </Text>
      <Card className="mt-6">
        <Story />
      </Card>
      <Title className="mt-8">Word Bank</Title>
      <Card className="mt-6">
        <Words />
      </Card>
    </main>
  );
}
