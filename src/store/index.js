import { configureStore } from '@reduxjs/toolkit'
import converterReducer from '../reducers/converterReducer'

const store = configureStore({ reducer: converterReducer })

export default store;