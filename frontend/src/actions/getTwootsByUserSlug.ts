import { Twoot } from '@/types'
import getTwoots from './getTwoots'

async function getTwootsByUserSlug(userSlug: string): Promise<Twoot[]> {
  try {
    const twoots = await getTwoots()

    const userTwoots = twoots.filter((twoot) => twoot.authorSlug === userSlug)

    return userTwoots
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getTwootsByUserSlug
