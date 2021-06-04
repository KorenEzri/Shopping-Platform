import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { cartSaga } from './saga';
import { CartState } from './types';

export const initialState: CartState = { items: [], total_price: 0 };

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<any>) {
      const currentCart = state.items;
      state.items = currentCart.concat(action.payload.item);
      state.total_price = Math.floor(
        Number(state.total_price) + Number(action.payload.item.price),
      );
    },
    removeFromCart(state, action: PayloadAction<any>) {
      const index = state.items.indexOf(action.payload.item);
      state.total_price = state.total_price - action.payload.price;
      state.items = state.items.splice(index, 1);
    },
    emptyCart(state, action: PayloadAction<any>) {
      state.items = [];
      state.total_price = 0;
    },
  },
});

export const { actions: cartActions } = slice;

export const useCartSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: cartSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useCartSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
