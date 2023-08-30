import { Title, Text } from '@tremor/react';
import Loading from './components/Loading';

export default async function Loading() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Your story for today</Title>
      <Text>
        Read the story below.  If you find any words that are tricky then click on it and it to the word bank.
      </Text>
    </main>
  );
}
