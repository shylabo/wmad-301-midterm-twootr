import { User } from '../types'
import users from '../users.json'

export interface loginProps {
  email: string
  password: string
}

const login = async ({ email, password }: loginProps): Promise<User> => {
  return new Promise((resolve, reject) => {
    try {
      if (!email || !password) {
        throw new Error('Both email and password are required')
      }

      setTimeout(() => {
        const user = users.find((user: User) => user.email === email && user.password === password)
        if (!user) {
          reject(new Error('User not found'))
        } else {
          resolve(user)
        }
      }, 2000)
    } catch (error) {
      reject(error)
    }
  })
}

export default login
