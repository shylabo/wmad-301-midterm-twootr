import { Twoot } from '@/types'
import users from '@/users.json'
import { getFakeAvatarUrl } from '@/lib/utils'

async function getTwoots(): Promise<Twoot[]> {
  const url = `http://localhost:8080/twoots`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Failed to fetch twoots')
    }

    const twoots = await response.json()
    twoots.forEach((twoot: Twoot) => {
      const author = users.find((user) => user.slug === twoot.authorSlug)
      if (!author) {
        const avatarUrl = getFakeAvatarUrl(twoot.authorSlug)
        twoot.user = {
          avatarUrl: avatarUrl,
          firstName: twoot.author.split(' ')[0],
          lastName: twoot.author.split(' ')[1],
          slug: twoot.authorSlug,
          website: 'whatever.com',
          location: 'Japan',
          joinedDate: 'Sun Nov 05 2023 10:13:34 GMT-0800',
          email: 'whatever@exmple.com',
          password: '',
        }
      } else {
        twoot.user = author
      }
    })
    return twoots
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getTwoots
