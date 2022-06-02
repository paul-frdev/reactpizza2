import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  image: string;
  title: string;
  type: [];
  radius: [];
  price: number;
};

type CartItemState = {
  cartItems: CartItem[];
};

const initialState: CartItemState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<string>) => {},
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
