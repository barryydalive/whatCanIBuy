import {combineReducers} from 'redux'
import walletReducer from './walletReducer'
import productReducer from './productReducer'

export default combineReducers({
  wallet: walletReducer,
  products: productReducer,
})