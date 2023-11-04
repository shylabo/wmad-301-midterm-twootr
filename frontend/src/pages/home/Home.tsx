import { useEffect, useState } from 'react'
import getTwoots from '../../actions/getTwoots'
import Card from './Card'
import { Twoot } from '../../types'

const Home = () => {
  const [twoots, setTwoots] = useState<Twoot[]>()

  useEffect(() => {
    const fetchTwoots = async () => {
      const fetchedTwoots = await getTwoots()
      setTwoots(fetchedTwoots)
    }
    fetchTwoots()
  }, [])
  return (
    <div>
      <div className="h-10" />

      <div className="grid grid-cols-1">{twoots && twoots.map((twoot, i) => <Card key={i} twoot={twoot} />)}</div>
    </div>
  )
}

export default Home
