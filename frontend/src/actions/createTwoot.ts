import { Twoot } from '@/types'
import users from '@/users.json'

interface createTwootPayload {
  authorSlug: string
  content: string
}

async function createTwoot(payload: createTwootPayload): Promise<Twoot> {
  const url = `http://localhost:8080/twoot`

  const author = users.find((user) => user.slug === payload.authorSlug)
  if (!author) {
    throw new Error('Author not found')
  }

  const postData = {
    newTwoot: {
      author: `${author.firstName} ${author.lastName}`,
      content: payload.content,
      authorSlug: payload.authorSlug,
      dateAdded: new Date().toISOString().slice(0, 10), // yyyy-mm-dd
    },
  }

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  }

  try {
    const response = await fetch(url, requestOptions)
    if (!response.ok) {
      throw new Error('Failed to fetch twoots')
    }

    const twoot = await response.json()
    const author = users.find((user) => user.slug === twoot.authorSlug)
    twoot.user = author

    return twoot
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default createTwoot
