import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AddtocartSlice {
    value: number
}

export interface AddtocartSlic {

}

const initialState: AddtocartSlice = {
    value: 0,
}

export const addtocartSlice = createSlice({
    name: 'addtocart',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = addtocartSlice.actions

export default addtocartSlice.reducer