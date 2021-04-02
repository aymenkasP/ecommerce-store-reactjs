import { createSlice  } from "@reduxjs/toolkit";



export const storeSlice = createSlice({
    name : 'my_store',
    initialState : {
        products : [],
        card : [],

    },

    reducers : {
        
        addToCard : (state,action) => {
            state.card.push(action)
        }
    }
})


export const { addToCard} = storeSlice.actions;


export const selectCard = state => state.my_store.card;
export const addProducts = state => state.my_store.products;


export default storeSlice.reducer