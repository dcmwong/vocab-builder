import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { queryBuilder } from "../../../lib/planetscale";

export async function GET(req: NextApiRequest) {

  const result = await queryBuilder
    .selectFrom('words')
    .select(['word'])
    .execute();

  return NextResponse.json({ words: result.map(res => res.word) })
}
export async function PATCH(req: NextApiRequest) {
  const body = await req.json()

  await queryBuilder
    .insertInto('words')
    .values(body.words.map((word: string) => ({word})))
    .execute();

  return NextResponse.json({ words: body.words })
}

