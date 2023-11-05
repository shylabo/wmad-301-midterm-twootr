import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFakeAvatarUrl(userSlug: string): string {
  const avatarUrl = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${userSlug}`
  return avatarUrl
}

export function getDaysCountFromDate(twootDate: Date): number {
  const currentDate = new Date()
  const timeDiff = currentDate.getTime() - twootDate.getTime()
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) // 1day: 1000mill sec * 60sec * 60min * 24hours

  return daysDiff
}

export function parseDateStringToDate(dateString: string): Date | null {
  const parsedDate = new Date(dateString)

  if (!isNaN(parsedDate.getTime())) {
    return parsedDate
  }

  return null
}

export const getFormattedDays = (days: number): string => {
  if (days === 0) {
    return 'Today'
  } else if (days === 1) {
    return 'Yesterday'
  } else {
    return `${days} days ago`
  }
}
