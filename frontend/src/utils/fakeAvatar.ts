import { v4 as uuidv4 } from 'uuid'

export function getFakeAvatarUrl(): string {
  const seed = uuidv4()
  const avatarUrl = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}`
  return avatarUrl
}
