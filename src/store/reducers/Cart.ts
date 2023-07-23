import { Game } from './../../views/Home/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const game = state.items.find((Item) => Item.id === action.payload.id)
      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('O jogo já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    isOpen: (state) => {
      state.isOpen = true
    },
    isClose: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, isClose, isOpen } = cartSlice.actions

export default cartSlice.reducer