import { useEffect, useState } from 'react'

import getTwoots from '@/actions/getTwoots'
import TwootCard from '@/components/TwootCard'
import TwootInput from '@/components/TwootInput'
import { Twoot, User } from '@/types'

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
      <div className="grid grid-cols-1">{twoots && twoots.map((twoot, i) => <TwootCard key={i} twoot={twoot} />)}</div>
    </div>
  )
}

export default Home
