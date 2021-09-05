import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const fetchCurrencies = createAsyncThunk(
    'currencies/fetchStatus',
    async () => {
        const response = await axios.get("https://api.exchangerate.host/latest");
        return response.data
    }
)

export const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: {
        entities: [],
        isLoading: false,
        error: null
    },
    reducers: {
        toggleCurrencyToFavorites: (state, action) => {
            const id = action.payload;
            const currencyIndex = state.entities.findIndex(item => item.id === id);
            if(currencyIndex !== -1){
                state.entities[currencyIndex].isFavorite = !state.entities[currencyIndex].isFavorite;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrencies.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchCurrencies.fulfilled, (state, action) => {
                const { rates } = action.payload;
                let currencies = [];
                for (let key in rates) {
                    currencies.push({
                        id: key,
                        title: key,
                        value: rates[key],
                        isFavorite: false
                    })
                }
                state.entities = currencies;
                state.isLoading = false;
            })
            .addCase(fetchCurrencies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
    },
})

export const { toggleCurrencyToFavorites } = currenciesSlice.actions

export default currenciesSlice.reducer