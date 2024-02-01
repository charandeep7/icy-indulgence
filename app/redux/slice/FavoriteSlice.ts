import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FavoriteSlice {
    favorite_ids: Set<number>
}

const initialState: FavoriteSlice = {
    favorite_ids: new Set<number>()
}

export const favoriteItems = createAsyncThunk('favoriteItems', async () => {
    try {
        // fetch from user favorite table if present
        // const carts = localStorage.getItem("carts")
        // const result = await fetch('/api/cart', {
        //     method: 'PUT',
        //     body: carts ? carts : JSON.stringify([]),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     cache: 'no-cache'
        // }, );
        // return await result.json();
    } catch (error: any) {
        throw new Error(error.message);
    }
})
export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        add: (state,action: PayloadAction<number>) => {
            state.favorite_ids.add(action.payload)
        },
        remove: (state,action: PayloadAction<number>) => {
            state.favorite_ids.delete(action.payload)
        }
    }
})

export const { add, remove } = favoriteSlice.actions

export default favoriteSlice.reducer