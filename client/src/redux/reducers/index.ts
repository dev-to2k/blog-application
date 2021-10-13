import { combineReducers } from 'redux'
import authReducer from './authReducer'
import alertReducer from './alertReducer'
import categories from './categoryReducer'
import homeBlogs from './homeBlogReducer'
import blogsCategory from './blogsCategoryReducer'
import otherInfo from './otherInfoReducer'
import blogsUser from './blogsUserReducer'

export default combineReducers({
  authReducer,
  alertReducer,
  categories,
  homeBlogs,
  blogsCategory,
  otherInfo,
  blogsUser,
})
