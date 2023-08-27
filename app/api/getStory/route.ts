import { NextResponse } from 'next/server'
export async function GET(req: Request) {
  const storyText = "new story fillin"

  return NextResponse.json({ storyText })
}
