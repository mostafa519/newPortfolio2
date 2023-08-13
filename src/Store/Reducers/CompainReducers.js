

import { combineReducers } from 'redux'
import articlesReducer from './ArticlesReducer'
import changeLoader from './LoaderReducer' 
import { FavoriteReducer } from './Favorites'
   


export default combineReducers({ 
    articles:articlesReducer, 
    loader:changeLoader,
    fav:FavoriteReducer
})