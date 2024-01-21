import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AddtocartSlice {
    isLoading: boolean;
    value: {
        id: number,
        count: number
    }[];
    items: any[],
}

const initialState: AddtocartSlice = {
    isLoading: false,
    value: [],
    items: [],
};

export const cartItems = createAsyncThunk('cartItems', async () => {
    try {
        const carts = localStorage.getItem("carts")
        const result = await fetch('/api/cart', {
            method: 'PUT',
            body: carts ? carts : JSON.stringify([]),
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-cache'
        }, );
        return await result.json();
    } catch (error: any) {
        throw new Error(error.message);
    }
});

export const addtocartSlice = createSlice({
    name: 'addtocart',
    initialState,
    reducers: {
        init: (state) => {
            const storage = localStorage.getItem("carts")
            const carts = storage ? JSON.parse(storage) : []
            state.value = carts
        },
        setCart: (state,action) => {
            state.value = action.payload
            
        },
        increment: (state, action: PayloadAction<number>) => {
            const indexToUpdate = state.value.findIndex(item => item.id === action.payload);
            if (indexToUpdate !== -1) {
                state.value[indexToUpdate].count++;
            } else {
                state.value.push({
                    id: action.payload,
                    count: 1
                })
            }
            localStorage.setItem("carts",JSON.stringify(state.value))
        },
        decrement: (state, action: PayloadAction<number>) => {
            const indexToUpdate = state.value.findIndex(item => item.id === action.payload);
            if (indexToUpdate !== -1) {
                if(--state.value[indexToUpdate].count <= 0){
                    state.value = state.value.filter(carts => carts.id !== action.payload)
                    state.items = state.items.filter(item => item.id !== action.payload)
                }
            }
            localStorage.setItem("carts",JSON.stringify(state.value))
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cartItems.fulfilled, (state, action) => {
            state.items = action.payload
            state.isLoading = false;
        });
        builder.addCase(cartItems.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(cartItems.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const { init, setCart, increment, decrement } = addtocartSlice.actions;

export default addtocartSlice.reducer;