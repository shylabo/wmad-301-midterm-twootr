import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import TwootCard from '@/components/organisms/twoot/TwootCard'
import { Twoot } from '@/types'
import { useUser } from '@/hooks/useUser'
import getTwoots from '@/actions/getTwoots'

const Retwoots = () => {
  const [twoots, setTwoots] = useState<Twoot[] | null>(null)
  const { userSlug } = useParams()

  const { user } = useUser()

  const storedRetwoots = localStorage.getItem('retwoots')
  const retwoots = storedRetwoots ? JSON.parse(storedRetwoots) : []

  if (!userSlug) {
    throw new Error('User slug is missing')
  }

  if (!user) {
    throw new Error('User not authenticated')
  }

  useEffect(() => {
    const fetchFilteredTwoots = async () => {
      const twoots = await getTwoots()
      const filteredTwoots = twoots.filter((twoot) => retwoots.includes(twoot._id))
      setTwoots(filteredTwoots)
    }

    fetchFilteredTwoots()
  }, [retwoots])

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
          <h1>You have no retwoots yet</h1>
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

export default Retwoots
