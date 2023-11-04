import { Twoot } from '@/types'
import getTwoots from './getTwoots'

async function getTwootById(id: string): Promise<Twoot> {
  try {
    const twoots = await getTwoots()

    const twoot = twoots.find((twoot) => twoot._id === id)
    if (!twoot) {
      throw new Error('Twoot not found')
    }

    return twoot
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getTwootById
