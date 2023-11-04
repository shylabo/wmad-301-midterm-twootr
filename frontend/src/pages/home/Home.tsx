import { useEffect, useState } from 'react'

import getTwoots from '@/actions/getTwoots'
import TwootCard from '@/components/TwootCard'
import TwootInput from '@/components/TwootInput'
import { Twoot, User } from '@/types'
import { Link } from 'react-router-dom'

const Home = () => {
  const [twoots, setTwoots] = useState<Twoot[]>([])

  useEffect(() => {
    const fetchTwoots = async () => {
      const fetchedTwoots = await getTwoots()
      setTwoots(fetchedTwoots)
    }
    fetchTwoots()
  }, [])

  const loggedInUser = localStorage.getItem('user')
  if (!loggedInUser) return null
  const user: User = JSON.parse(loggedInUser)

  const handleTwootSubmit = async (newTwoot: Twoot) => {
    setTwoots((prevTwoots) => [newTwoot, ...prevTwoots])
  }

  return (
    <div>
      <TwootInput user={user} onSubmitCallback={handleTwootSubmit} />
      <div className="grid grid-cols-1">
        {twoots &&
          twoots.map((twoot, i) => (
            <Link to={`/twoots/${twoot._id}`} className="hover:bg-secondary/40">
              <TwootCard key={i} twoot={twoot} />
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Home
