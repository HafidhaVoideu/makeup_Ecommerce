import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import axios from "../../../axios/axios";

export const fetchProductByBrandTagRating = createAsyncThunk(
  "products/fetchProducts",

  async (sortParameters: any) => {
    const { brand, rating, tag, category, type, maxPrice, minPrice } =
      sortParameters;

    const response = await axios.get("", {
      params: {
        brand,
        rating_greater_than: rating || "",
        product_tag: tag || "",
        product_type: type || "",
        product_category: category || "",
        price_greater_than: maxPrice || "",
        price_less_than: minPrice || "",
      },
    });
    return response.data;
  }
);

export interface ProductBasicType {
  id: number | null;
  brand: string | null;
  description: string;
  category: string | null;
  api_featured_image: string;
  image_link: string | undefined;
  price: string;
  count: number;
}

type ColorType = {
  hex_value: string;
  colour_name: string;
};

export interface ProductType extends ProductBasicType {
  name?: string | null;
  product_colors?: ColorType[] | null;
  product_type?: string | null;
  rating?: number | null;
}

export type ShopType = {
  brand: string;
  tag: string;
  rating: number | undefined;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  type: string;
  category: string;
  products: ProductType[];
  status: "idle" | "success" | "loading" | "failed";
  error: undefined | string;
};

const initialState: ShopType = {
  brand: "",
  tag: "",
  minPrice: 0,
  maxPrice: 0,
  type: "",
  category: "",
  rating: undefined,
  products: [],
  status: "idle",
  error: undefined,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setTag: (state, action) => {
      state.tag = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },

    resetProducts: (state) => {
      state.products = [];
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchProductByBrandTagRating.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByBrandTagRating.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProductByBrandTagRating.fulfilled, (state, action) => {
        state.status = "success";

        state.products = action.payload;
        state.products.map((product) => {
          product.count = 1;
          if (!product.rating)
            product.rating = Math.floor(Math.random() * 5 + 1);
          return product;
        });
      });
  },
});

export const getStatus = (state: RootState) => state.shop.status;
export const getError = (state: RootState) => state.shop.error;
export const getProducts = (state: RootState) => state.shop.products;

// ******************* Filter Options *************

export const getBrand = (state: RootState) => state.shop.brand;
export const getTag = (state: RootState) => state.shop.tag;
export const getRating = (state: RootState) => state.shop.rating;
export const getMinPrice = (state: RootState) => state.shop.minPrice;
export const getMaxPrice = (state: RootState) => state.shop.maxPrice;
export const getProductType = (state: RootState) => state.shop.type;
export const getCategory = (state: RootState) => state.shop.category;
export const {
  setBrand,
  setRating,
  setTag,
  setCategory,
  setMaxPrice,
  setMinPrice,
  setType,
  resetProducts,
} = shopSlice.actions;
export default shopSlice.reducer;
