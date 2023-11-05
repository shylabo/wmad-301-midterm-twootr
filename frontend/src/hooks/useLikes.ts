import { useToast } from '@/components/ui/use-toast'

export function useLikes() {
  const { toast } = useToast()

  const getLikesFromLocalStorage = (): string[] => {
    const storedLikes = localStorage.getItem('likes')
    if (storedLikes) {
      return JSON.parse(storedLikes)
    }
    return []
  }

  const setLikesToLocalStorage = (likes: string[]) => {
    localStorage.setItem('likes', JSON.stringify(likes))
  }

  const toggleLike = (twootId: string) => {
    const currentLikes = getLikesFromLocalStorage()

    if (currentLikes.includes(twootId)) {
      const updatedLikes = currentLikes.filter((id) => id !== twootId)
      setLikesToLocalStorage(updatedLikes)
      toast({
        title: 'Twoot has been removed from likes',
      })
    } else {
      const updatedLikes = [...currentLikes, twootId]
      setLikesToLocalStorage(updatedLikes)
      toast({
        title: 'Twoot has been added in likes',
      })
    }
  }

  const isLiked = (twootId: string) => {
    const currentLikes = getLikesFromLocalStorage()
    return currentLikes.includes(twootId)
  }

  return { isLiked, toggleLike }
}
