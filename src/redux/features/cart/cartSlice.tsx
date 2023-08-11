import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ProductBasicType } from "../shop/shopSlice";

type CartType = {
  isCartOpen: boolean;
  cart: ProductBasicType[];
  total: number;
};

const initialState: CartType = {
  isCartOpen: false,
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const doesItemExist = state.cart.filter(
        (item) => item.id === action.payload.item.id
      );

      if (!doesItemExist.length || !state.cart.length) {
        state.cart.push({ ...action.payload.item, count: 1 });
      }
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increaseCount: (state, action) => {
      state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, count: item.count++ };
        } else return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1)
          return { ...item, count: item.count-- };
        else return item;
      });
    },
    countTotalItems: (state) => {
      state.total = state.cart.reduce((total, item) => {
        return total + parseFloat(item.price) * item.count;
      }, 0);
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const getCartItems = (state: RootState) => state.cart.cart;
export const getTotal = (state: RootState) => state.cart.total;
export const isCartOpen = (state: RootState) => state.cart.isCartOpen;

export const {
  addItem,
  removeItem,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
  countTotalItems,
} = cartSlice.actions;

export default cartSlice.reducer;
