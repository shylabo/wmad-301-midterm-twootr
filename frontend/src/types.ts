export interface User {
  avatarUrl: string
  firstName: string
  lastName: string
  slug: string
  website?: string
  location?: string
  joinedDate: string
  email: string
  password: string
}

export interface Twoot {
  _id: string
  author: string
  content: string
  tags?: string[]
  authorSlug: string
  length?: number
  dateAdded: string
  dateModified?: string
  user: User
}
