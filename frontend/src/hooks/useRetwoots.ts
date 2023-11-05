import { useToast } from '@/components/ui/use-toast'

export function useRetwoots() {
  const { toast } = useToast()

  const getRetwootsFromLocalStorage = (): string[] => {
    const storedRetwoots = localStorage.getItem('retwoots')
    if (storedRetwoots) {
      return JSON.parse(storedRetwoots)
    }
    return []
  }

  const setRetwootsToLocalStorage = (retwoots: string[]) => {
    localStorage.setItem('retwoots', JSON.stringify(retwoots))
  }

  const toggleRetwoots = (twootId: string) => {
    const currentRetwoots = getRetwootsFromLocalStorage()

    if (currentRetwoots.includes(twootId)) {
      const updatedRetwoots = currentRetwoots.filter((id) => id !== twootId)
      setRetwootsToLocalStorage(updatedRetwoots)
      toast({
        title: 'Retwooted has been canceled',
      })
    } else {
      const updatedRetwoots = [...currentRetwoots, twootId]
      setRetwootsToLocalStorage(updatedRetwoots)
      toast({
        title: 'Retwooted!',
      })
    }
  }

  const isRetwooted = (twootId: string) => {
    const currentRetwoots = getRetwootsFromLocalStorage()
    return currentRetwoots.includes(twootId)
  }

  return { isRetwooted, toggleRetwoots }
}
