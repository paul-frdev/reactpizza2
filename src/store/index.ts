import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice';
import goodsSlice from './goodsSlice';

const store = configureStore({
  reducer: {
      goods: goodsSlice,
      cart: cartSlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
