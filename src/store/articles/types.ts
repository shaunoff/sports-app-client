export type Article = {
  id: number
  title: string
  content: string
}

export type ArticleState = {
  articles: Article[]
  league: any
}

export * from './actions'
