export interface Task {
  id: string
  title: string
  type: 'comment' | 'poll'
  options?: string[]
  votes?: number
  comments?: number
  created: string
}

export interface UserProfile {
  id: string
  name: string
  avatar: string
  stats: {
    posts: number
    contributions: number
    followers: number
    following: number
  }
}

