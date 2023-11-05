import { useParams } from 'react-router-dom'

import getTwootById from '@/actions/getTwootById'
import TwootCard from '@/components/TwootCard'
import { useEffect, useState } from 'react'
import { Twoot } from '@/types'
import Header from '@/components/layout/header/Header'

const TwootPage = () => {
  const [twoot, setTwoot] = useState<Twoot>()
  const { twootId } = useParams()
  if (!twootId) {
    throw new Error('TwootId is missing')
  }

  useEffect(() => {
    const fetchTwoot = async () => {
      const fetchedTwoot = await getTwootById(twootId)
      if (!fetchedTwoot) {
        throw new Error('Twoot not found')
      }
      setTwoot(fetchedTwoot)
    }
    fetchTwoot()
  }, [twootId])

  return (
    <>
      <Header label="Post" showBackArrow />
      {twoot && <TwootCard twoot={twoot} />}
    </>
  )
}

export default TwootPage
