import { Card, Title, Text } from '@tremor/react';
import { queryBuilder } from '../lib/planetscale';
import Search from './search';
import UsersTable from './table';
import Story from './components/Story';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const users = await queryBuilder
    .selectFrom('users')
    .select(['id', 'name', 'username', 'email'])
    .where('name', 'like', `%${search}%`)
    .execute();

  const onWordClick = () => ({});
  const data = await fetch("http://localhost:3002/api/getStory");
  const storyText = (await data.json()).storyText

  console.log('>>', storyText)

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Your story</Title>
      <Text>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text>
      <Search />
      <Card className="mt-6">
        <Story storyText={storyText} onWordClick={onWordClick} />
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
