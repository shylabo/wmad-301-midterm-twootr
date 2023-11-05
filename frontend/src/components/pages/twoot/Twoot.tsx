import { useParams } from 'react-router-dom'

import getTwootById from '@/actions/getTwootById'
import TwootCard from '@/components/organisms/twoot/TwootCard'
import { useEffect, useState } from 'react'
import { Twoot } from '@/types'
import Header from '@/components/layout/header/Header'

const TwootPage = () => {
  const [twoot, setTwoot] = useState<Twoot | null>()
  const { twootId } = useParams()
  if (!twootId) {
    throw new Error('TwootId is missing')
  }

  useEffect(() => {
    const fetchTwoot = async () => {
      try {
        const fetchedTwoot = await getTwootById(twootId)
        if (!fetchedTwoot) {
          throw new Error('Twoot not found')
        }
        setTwoot(fetchedTwoot)
      } catch (err) {
        setTwoot(null)
      }
    }
    fetchTwoot()
  }, [twootId])

  return (
    <>
      <Header label="Post" showBackArrow />
      {twoot === undefined ? (
        <TwootCard.Skeleton />
      ) : twoot === null ? (
        <div className="flex justify-center pt-10">
          <h1 className="text-xl font-medium">Twoot not found</h1>
        </div>
      ) : (
        <TwootCard twoot={twoot} />
      )}
    </>
  )
}

export default TwootPage
