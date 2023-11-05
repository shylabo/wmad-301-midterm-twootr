import { User } from '@/types'

export function useUser() {
  const loggedInUser = localStorage.getItem('user')
  const user: User = loggedInUser ? JSON.parse(loggedInUser) : null

  return { user }
}
