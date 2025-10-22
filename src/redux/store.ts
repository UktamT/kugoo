import { configureStore } from '@reduxjs/toolkit'
import scootersReducer from './slices/scootersSlice'
import scooterPageReducer from './slices/scooterPageSlice'
import cartReducer from './slices/cartSlice'

export const store = configureStore({
	reducer: {
		scooters: scootersReducer,
    scooterPage: scooterPageReducer,
    cart: cartReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
