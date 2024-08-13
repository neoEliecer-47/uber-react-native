import { configureStore } from '@reduxjs/toolkit'
import navReducer from './reducers/navSlice'

const store = configureStore({
  reducer: {
    nav: navReducer
  }
})

export default store