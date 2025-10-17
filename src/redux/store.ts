import { configureStore } from '@reduxjs/toolkit'
import scootersReducer from './slices/scootersSlice'

export const store = configureStore({
	reducer: {
		scooters: scootersReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
