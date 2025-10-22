import { createSlice } from "@reduxjs/toolkit";

  interface cartItem {
    id: number | string
    image: string
    title: string
    mAh: string
    speed: string
    power: string
    limit: string
    checkpoint: string
    price: number | string
    ready: string;
    recomendation?: string
    count: number
  }

interface cartState {
  items: cartItem[]
}

const initialState: cartState = {
  items: []
}

const cartSlice = createSlice ({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.items.push(action.payload)
    },
    setCartItems: (state, action) => {
      state.items = action.payload
    },
    removeFromCart: (state, action) => {
      
      const payloadId = String(action.payload)
      state.items = state.items.filter(item => String(item.id) !== payloadId)
    }
  }
})

export const {setCart, setCartItems, removeFromCart} = cartSlice.actions
export default cartSlice.reducer