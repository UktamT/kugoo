import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  item: [],
  active: 'Все'
}

const scooterPageSlice = createSlice({
  name: 'scooterPage',
  initialState,
  reducers: {
    setScooterPage: (state, action) => {
      state.item = action.payload
    },
    setActiveCategory: (state, action) => {
      state.active = action.payload
    }
  }
})

export const {setScooterPage, setActiveCategory} = scooterPageSlice.actions
export default scooterPageSlice.reducer