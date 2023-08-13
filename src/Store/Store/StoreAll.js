import { legacy_createStore as createStore} from 'redux' 
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

import combineReducers from '../Reducers/CompainReducers'
 const store=  createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)))

 export default store