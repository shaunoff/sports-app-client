import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { createEpicMiddleware } from 'redux-observable'
import { composeEnhancers } from './utils'
import { rootReducer } from './rootReducer'
import rootEpic from './rootEpic'
//import * as actions from './articles/actions'

const epicMiddleware = createEpicMiddleware()

// configure middlewares
export const history = createBrowserHistory()
const middlewares = [routerMiddleware(history), epicMiddleware]

const enhancer = composeEnhancers(applyMiddleware(...middlewares))
const combinedReducer = rootReducer(history)
const store = createStore(combinedReducer, enhancer)

epicMiddleware.run(rootEpic)

export type AppState = ReturnType<typeof combinedReducer>

export default store
