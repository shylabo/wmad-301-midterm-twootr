import { Link } from 'react-router-dom'
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
      {twoots === null ? null : twoots.length === 0 ? (
        <div className="w-full flex justify-center pt-10">
          <h1>You have no bookmarks yet</h1>
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

export default Bookmarks
