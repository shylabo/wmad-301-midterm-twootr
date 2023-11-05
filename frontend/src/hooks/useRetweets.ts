import { useToast } from '@/components/ui/use-toast'

export function useRetweets() {
  const { toast } = useToast()

  const getRetweetsFromLocalStorage = (): string[] => {
    const storedRetweets = localStorage.getItem('retweets')
    if (storedRetweets) {
      return JSON.parse(storedRetweets)
    }
    return []
  }

  const setRetweetsToLocalStorage = (retweets: string[]) => {
    localStorage.setItem('retweets', JSON.stringify(retweets))
  }

  const toggleRetweets = (twootId: string) => {
    const currentRetweets = getRetweetsFromLocalStorage()

    if (currentRetweets.includes(twootId)) {
      const updatedRetweets = currentRetweets.filter((id) => id !== twootId)
      setRetweetsToLocalStorage(updatedRetweets)
      toast({
        title: 'Retweeted has been canceled',
      })
    } else {
      const updatedRetweets = [...currentRetweets, twootId]
      setRetweetsToLocalStorage(updatedRetweets)
      toast({
        title: 'Retweeted!',
      })
    }
  }

  const isRetweeted = (twootId: string) => {
    const currentRetweets = getRetweetsFromLocalStorage()
    return currentRetweets.includes(twootId)
  }

  return { isRetweeted, toggleRetweets }
}
