import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFakeAvatarUrl(userSlug: string): string {
  const avatarUrl = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${userSlug}`
  return avatarUrl
}
