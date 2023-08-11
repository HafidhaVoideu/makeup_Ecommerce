import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ProductBasicType } from "../shop/shopSlice";

type FavoriteType = {
  isFavorite: boolean;
  favorites: ProductBasicType[];
};

const initialState: FavoriteType = {
  isFavorite: false,
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteItem: (state, action) => {
      const doesItemExist = state.favorites.filter(
        (item) => item.id === action.payload.item.id
      );

      if (!doesItemExist.length || !state.favorites.length) {
        state.favorites.push(action.payload.item);
      }
    },
    removeFavoriteItem: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },

    setIsFavorite: (state) => {
      state.isFavorite = !state.isFavorite;
    },
  },
});

export const getFavoriteItems = (state: RootState) => state.favorites.favorites;
export const isfavorites = (state: RootState) => state.favorites.isFavorite;
export const { addFavoriteItem, removeFavoriteItem, setIsFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
