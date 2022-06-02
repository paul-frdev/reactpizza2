import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IGoodsListProps } from "../data/products";

export const fetchGoods = createAsyncThunk<
  IGoodsListProps[],
  undefined,
  { rejectValue: string }
>("goods/fethGoods", async function (_, { rejectWithValue }) {
  const response = await fetch("https://6297a2608d77ad6f7506abca.mockapi.io/items");
  if (!response.ok) {
    return rejectWithValue("something went wrong");
  }
  const data = await response.json();

  return data;
});

type GoodsState = {
  goods: IGoodsListProps[];
  loading: boolean;
  error: string | null;
};

const initialState = {
  goods: [],
  loading: false,
  error: null,
} as GoodsState;

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.goods = action.payload;
        state.loading = false;
      });
  },
});

export const {} = goodsSlice.actions;
export default goodsSlice.reducer;
