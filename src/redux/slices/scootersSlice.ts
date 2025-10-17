import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
}

const scootersSlice = createSlice({
	name: 'scooters',
	initialState,
	reducers: {
		setScooters: (state, action) => {
      state.items = action.payload
    }
	},
})

export const {setScooters} = scootersSlice.actions
export default scootersSlice.reducer
