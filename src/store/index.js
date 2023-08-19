import { configureStore } from '@reduxjs/toolkit'
import obtainData  from './slices/data.slice'

export default configureStore({
  reducer: {
    obtainData:obtainData
	}
})