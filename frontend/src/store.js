import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './store/reducers'

const { restaurants, reviews, search } = reducers

const reducer = combineReducers({
  restaurants,
  reviews,
  search
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
  
store.subscribe(() => console.log(store.getState()))
  
export default store