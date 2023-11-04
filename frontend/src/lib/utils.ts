import { v4 as uuidv4 } from 'uuid'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFakeAvatarUrl(): string {
  const seed = uuidv4()
  const avatarUrl = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}`
  return avatarUrl
}
