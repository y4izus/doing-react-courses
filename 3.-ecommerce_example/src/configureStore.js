import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './modules'


const logger = store => next => action => {
  console.log('Dispatching', action)
  next(action)
  console.log('El estado ahora es', store.getState())
}

const thunkBricolajero = store => next => action => 
  typeof action === 'function' ? action(store.dispatch, store.getState) : next(action)

const middleware = [logger, thunkBricolajero]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware)
))

export default store