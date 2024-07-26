import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  status: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.carts.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = id

      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const currentItem = state.carts.find(
        (item) => item.id === action.payload
      );

      currentItem.quantity++;

      currentItem.totalPrice = currentItem.price * currentItem.quantity;
    },
    decreaseItemQuantity(state, action) {
      const currentItem = state.carts.find(
        (item) => item.id === action.payload
      );

      currentItem.quantity--;

      currentItem.totalPrice = currentItem.price * currentItem.quantity;

      if (currentItem.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },

    clearCart(state, action) {
      state.carts = [];

      state.status = cartSlice.caseReducers.updateStatus(state, action);
    },

    updateStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  updateStatus,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCurrentQuantity = (id) => (state) =>
  state.cart.carts.find((item) => item.id === id)?.quantity ?? 0;

export const getTotalOrderPrice = (state) =>
  state.cart.carts?.reduce((acc, item) => acc + item.totalPrice, 0) ?? 0;

export const getCart = (state) => state.cart.carts;
