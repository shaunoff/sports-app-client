import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import { articles } from './articles/reducer'

export const rootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    articles,
  })
