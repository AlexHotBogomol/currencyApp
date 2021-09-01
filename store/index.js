import { configureStore } from '@reduxjs/toolkit'
import currenciesReducer from "./currencies";

export default configureStore({
    reducer: {
        currencies: currenciesReducer
    }
})