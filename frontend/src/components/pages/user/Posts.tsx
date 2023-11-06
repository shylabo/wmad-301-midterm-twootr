import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import TwootCard from '@/components/organisms/twoot/TwootCard'
import { Twoot } from '@/types'
import getTwootsByUserSlug from '@/actions/getTwootsByUserSlug'
import { useUser } from '@/hooks/useUser'

const Posts = () => {
  const { user } = useUser()
  const [twoots, setTwoots] = useState<Twoot[] | null>(null)
  const { userSlug } = useParams()

  if (!userSlug) {
    throw new Error('User slug is missing')
  }

  if (!user) {
    throw new Error('User not authenticated')
  }

  useEffect(() => {
    const fetchTwoots = async () => {
      const fetchedTwoots = await getTwootsByUserSlug(userSlug)
      setTwoots(fetchedTwoots)
    }
    fetchTwoots()
  }, [userSlug])

  return (
    <>
      {twoots === null ? (
        <>
          {Array.from({ length: 10 }, (_, i) => (
            <TwootCard.Skeleton key={i} />
          ))}
        </>
      ) : twoots.length === 0 ? (
        <div className="w-full flex justify-center pt-10">
          <h1>You have no posts yet</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1">
          {twoots.map((twoot) => (
            <TwootCard key={twoot._id} twoot={twoot} />
          ))}
        </div>
      )}
    </>
  )
}

export default Posts
