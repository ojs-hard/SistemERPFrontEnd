import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import commonReducer from './commonSlice';

export default configureStore({
    reducer: {
        common: commonReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
});