import { useEffect, useState } from 'react'

import TwootCard from '@/components/organisms/twoot/TwootCard'
import getTwoots from '@/actions/getTwoots'
import { Twoot } from '@/types'
import Header from '@/components/layout/header/Header'

const Bookmarks = () => {
  const [twoots, setTwoots] = useState<Twoot[] | null>(null)
  const storedBookmarks = localStorage.getItem('bookmarks')
  const bookmarks = storedBookmarks ? JSON.parse(storedBookmarks) : []

  useEffect(() => {
    const fetchFilteredTwoots = async () => {
      const twoots = await getTwoots()
      const filteredTwoots = twoots.filter((twoot) => bookmarks.includes(twoot._id))
      setTwoots(filteredTwoots)
    }

    fetchFilteredTwoots()
  }, [bookmarks])

  return (
    <>
      <Header label="Bookmarks" showBackArrow />
      {twoots === null ? (
        <>
          {Array.from({ length: 10 }, (_, i) => (
            <TwootCard.Skeleton key={i} />
          ))}
        </>
      ) : twoots.length === 0 ? (
        <div className="w-full flex justify-center pt-10">
          <h1>You have no bookmarks yet</h1>
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

export default Bookmarks
