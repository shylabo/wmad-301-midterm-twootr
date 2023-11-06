import { useEffect, useState } from 'react'

import getTwoots from '@/actions/getTwoots'
import TwootCard from '@/components/organisms/twoot/TwootCard'
import TwootInput from '@/components/organisms/twoot/TwootInput'
import Header from '@/components/layout/header/Header'
import { Twoot } from '@/types'
import { useUser } from '@/hooks/useUser'

const Home = () => {
  const [twoots, setTwoots] = useState<Twoot[]>([])
  const { user } = useUser()

  useEffect(() => {
    const fetchTwoots = async () => {
      if (!user) return null
      const fetchedTwoots = await getTwoots()
      setTwoots(fetchedTwoots)
    }
    fetchTwoots()
  }, [])

  const handleTwootSubmit = async (newTwoot: Twoot) => {
    setTwoots((prevTwoots) => [newTwoot, ...prevTwoots])
  }

  return (
    <div>
      <Header label="Twoots" />
      <TwootInput user={user} onSubmitCallback={handleTwootSubmit} />
      <div className="grid grid-cols-1">
        {twoots.length === 0 ? (
          <>
            {Array.from({ length: 10 }, (_, i) => (
              <TwootCard.Skeleton key={i} />
            ))}
          </>
        ) : (
          <>
            {twoots.map((twoot) => (
              <TwootCard key={twoot._id} twoot={twoot} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Home
