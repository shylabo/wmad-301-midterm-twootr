import { useToast } from '@/components/ui/use-toast'

export function useBookmarks() {
  const { toast } = useToast()

  const getBookmarksFromLocalStorage = (): string[] => {
    const storedBookmarks = localStorage.getItem('bookmarks')
    if (storedBookmarks) {
      return JSON.parse(storedBookmarks)
    }
    return []
  }

  const setBookmarksToLocalStorage = (bookmarks: string[]) => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }

  const toggleBookmark = (twootId: string) => {
    const currentBookmarks = getBookmarksFromLocalStorage()

    if (currentBookmarks.includes(twootId)) {
      const updatedBookmarks = currentBookmarks.filter((id) => id !== twootId)
      setBookmarksToLocalStorage(updatedBookmarks)
      toast({
        title: 'Twoot has been removed from bookmarks',
      })
    } else {
      const updatedBookmarks = [...currentBookmarks, twootId]
      setBookmarksToLocalStorage(updatedBookmarks)
      toast({
        title: 'Twoot has been added in bookmarks',
      })
    }
  }

  const isBookmarked = (twootId: string) => {
    const currentBookmarks = getBookmarksFromLocalStorage()
    return currentBookmarks.includes(twootId)
  }

  return { isBookmarked, toggleBookmark }
}
