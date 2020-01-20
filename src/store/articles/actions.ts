import { Article } from './types'

// export enum ActionTypes {
//   GET_ARTICLES = 'GET_ARTICLES',
//   DELETE_ARTICLE = 'DELETE_ARTICLE',
//   ARTICLE_DELETED = 'ARTICLE_DELETED',
// }
export const GET_ARTICLES = 'GET_ARTICLES'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'
export const ARTICLE_DELETED = 'ARTICLE_DELETED'
export const ARTICLE_LEAGUE = 'ARTICLE_LEAGUE'
//export const testy = 'testy' as const

export const articleDeleted = () =>
  <const>{
    type: ARTICLE_DELETED,
  }

export const articleLeague = (payload: any) =>
  <const>{
    type: ARTICLE_LEAGUE,
    payload,
  }

export const fetchArticles = (payload: Article[]) =>
  <const>{
    type: GET_ARTICLES,
    payload,
  }

export const deleteArticle = (payload: number) =>
  <const>{
    type: DELETE_ARTICLE,
    payload,
  }

export type ArticleActions =
  | ReturnType<typeof fetchArticles>
  | ReturnType<typeof deleteArticle>
  | ReturnType<typeof articleDeleted>
  | ReturnType<typeof articleLeague>
