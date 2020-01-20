import { createStore,  applyMiddleware, compose } from 'redux'

//App reducers
import reducers from '../store/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  {},
  composeEnhancers(),
)

export { store }