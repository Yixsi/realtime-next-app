import { db } from "@/lib/db"

export default async function Home() {
  await db.set('hello', 'hi')
  return (
    <main className='text-red-500'>Hello world
    </main>
  )
}
