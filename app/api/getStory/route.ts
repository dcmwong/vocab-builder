import { NextResponse } from 'next/server'
import OpenAI from "openai";
import { queryBuilder } from '../../../lib/planetscale';
import { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest) {
  const users = await queryBuilder
    .selectFrom('users')
    .select(['age'])
    .limit(1)
    .execute();

  const subjects = ['harry potter', 'dragons']
  const trickyWords = ["Abashed", "Abbreviate", "Abduct" ]
  const age = users[0].age || 3;

  const openai = new OpenAI({
    organization: "org-L6fnncipnXxvtISnfc1fbENA",
    apiKey: process.env.OPENAI_API_KEY,
  });
  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: generatePrompt(subjects, trickyWords, age),
    temperature: 0.6,
    max_tokens: age * 30
  });

  const storyText = completion.choices[0].text

  return NextResponse.json({ storyText })
}

function generatePrompt(subjects: string[], trickyWords: string[], age: number) {
  return `Give me a story that is suitable for a child aged ${age} about ${subjects.join(' ')}
and must have the words ${trickyWords.join(' ')} 
`
}

