import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './goodsSlice';
import cartreducer from './cartSlice'

export default configureStore({
    reducer: {
        goods: goodsReducer,
        cart: cartreducer
    }
})