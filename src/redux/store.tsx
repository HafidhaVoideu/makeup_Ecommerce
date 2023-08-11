import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import favoritesReducer from "./features/favorites/favoriteSlice";

import shopReducer from "./features/shop/shopSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    shop: shopReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
