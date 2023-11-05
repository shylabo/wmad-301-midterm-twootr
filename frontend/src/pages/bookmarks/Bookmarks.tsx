import { useEffect, useState } from 'react'

import TwootCard from '@/components/TwootCard'
import getTwoots from '@/actions/getTwoots'
import { Twoot } from '@/types'
import { Link } from 'react-router-dom'

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
      {twoots === null ? null : twoots.length === 0 ? (
        <div className="w-full flex justify-center pt-10">
          <h1>You have no bookmarks yet</h1>
        </div>
      ) : (
        <>
          {twoots.map((twoot) => {
            return (
              <Link key={twoot._id} to={`/twoots/${twoot._id}`} className="hover:bg-secondary/40 p-10">
                <TwootCard twoot={twoot} />
              </Link>
            )
          })}
        </>
      )}
    </>
  )
}

export default Bookmarks
