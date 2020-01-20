import { routerActions } from 'connected-react-router'
import { fetchArticles, deleteArticle } from './articles/actions'

export default {
  router: routerActions,
  articles: { fetchArticles, deleteArticle },
}
