import { Link } from 'react-router-dom'
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

  if (!user) {
    throw new Error('User not authenticated')
  }

  useEffect(() => {
    const fetchTwoots = async () => {
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
        {twoots &&
          twoots.map((twoot) => (
            <Link key={twoot._id} to={`/twoots/${twoot._id}`} className="hover:bg-secondary/40">
              <TwootCard twoot={twoot} />
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Home
