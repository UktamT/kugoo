import { configureStore } from '@reduxjs/toolkit'
import scootersReducer from './slices/scootersSlice'
import scooterPageReducer from './slices/scooterPageSlice'

export const store = configureStore({
	reducer: {
		scooters: scootersReducer,
    scooterPage: scooterPageReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
