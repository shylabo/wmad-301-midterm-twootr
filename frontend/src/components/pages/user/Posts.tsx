import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

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
      {twoots === null ? null : twoots.length === 0 ? (
        <div className="w-full flex justify-center pt-10">
          <h1>You have no twoots yet</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1">
          {twoots &&
            twoots.map((twoot) => (
              <Link key={twoot._id} to={`/twoots/${twoot._id}`} className="hover:bg-secondary/40">
                <TwootCard twoot={twoot} />
              </Link>
            ))}
        </div>
      )}
    </>
  )
}

export default Posts
