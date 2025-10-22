import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
	items: [],
  limit: 4,
}

const scootersSlice = createSlice({
	name: 'scooters',
	initialState,
	reducers: {
		setScooters: (state, action) => {
      state.items = action.payload
    },
    setPage: (state) => {
      state.limit = state.limit + 4
    },
    setResetPage: (state) => {
      state.limit = state.limit - 4
    }
	},
})

export const {setScooters, setPage, setResetPage} = scootersSlice.actions
export default scootersSlice.reducer
