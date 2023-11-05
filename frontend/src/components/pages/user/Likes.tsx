import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import TwootCard from '@/components/organisms/twoot/TwootCard'
import { Twoot } from '@/types'
import { useUser } from '@/hooks/useUser'
import getTwoots from '@/actions/getTwoots'

const Likes = () => {
  const [twoots, setTwoots] = useState<Twoot[] | null>(null)
  const { userSlug } = useParams()

  const { user } = useUser()

  const storedLikes = localStorage.getItem('likes')
  const likes = storedLikes ? JSON.parse(storedLikes) : []

  if (!userSlug) {
    throw new Error('User slug is missing')
  }

  if (!user) {
    throw new Error('User not authenticated')
  }

  useEffect(() => {
    const fetchFilteredTwoots = async () => {
      const twoots = await getTwoots()
      const filteredTwoots = twoots.filter((twoot) => likes.includes(twoot._id))
      setTwoots(filteredTwoots)
    }

    fetchFilteredTwoots()
  }, [likes])

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
          <h1>You have no likes yet</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1">
          {twoots.map((twoot) => (
            <Link key={twoot._id} to={`/twoots/${twoot._id}`} className="hover:bg-secondary/40">
              <TwootCard twoot={twoot} />
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default Likes
