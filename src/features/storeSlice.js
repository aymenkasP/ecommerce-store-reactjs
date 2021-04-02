import { createSlice  } from "@reduxjs/toolkit";



export const idSlice = createSlice({
    name : 'my_store',
    initialState : {
        products : [],
        card : [],

    },

    reducers : {
        increment : state => {
            state.id += 1
        },

        decrement : state => {
            state.id -=1
        },
        incrementByAmount :(state , action) => {
                state.id = action.payload
        },

        addToCard : (state,action) => {
            state.card.push(action)
        }
    }
})


export const {increment , decrement , incrementByAmount , addToCard} = idSlice.actions;

export const selectId = state => state.id.id ;
export const selectCard = state => state.id.card;
export const addProducts = state => state.id.products;


export default idSlice.reducer