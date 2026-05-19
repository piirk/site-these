export type PersonRole = 'researcher' | 'participant' | 'supervisor'

export interface Person {
  id: string
  name: string
  role: PersonRole
  bio: string
  shortBio?: string
  photoUrl?: string
  institution?: string
}

export interface Meme {
  id: string
  imageUrl: string
  altText: string
  caption?: string
}

export interface BookPage {
  pageNumber: number
  imageUrl: string
  altText: string
}

export interface BookViewerData {
  title: string
  pages: BookPage[]
}

export interface MethodKeyword {
  term: string
  definition: string
  slug: string // pour lien ou ancre future
}

export interface SiteConfig {
  surveyUrl: string
  thesisUrl: string
}

export interface SurveyMeta {
  participantCount?: number
  estimatedDurationMinutes?: number
}
