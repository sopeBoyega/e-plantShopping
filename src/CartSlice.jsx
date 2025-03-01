import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (!existingItem) {
        state.items.push({ name, image, cost, quantity: 1 }); // Fix typo here
      } else {
       return
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemForUpdate = state.items.find(item => item.name === name);
      if (itemForUpdate) {
        itemForUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
