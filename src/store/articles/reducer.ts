import * as actions from './actions'
import { ArticleState, Article } from './types'
//import { AnyAction } from 'redux'

export const initialArticleState: ArticleState = {
  articles: [],
  league: [],
}

export const articles = (
  state = initialArticleState,
  action: actions.ArticleActions,
): ArticleState => {
  switch (action.type) {
    case actions.GET_ARTICLES:
      const articles = action.payload
      return { ...state, articles }
    case actions.DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          (article: Article) => article.id !== action.payload,
        ),
      }
    case actions.ARTICLE_LEAGUE:
      return {
        ...state,
        league: action.payload.api.standings[0],
      }
    default:
      return state
  }
}
