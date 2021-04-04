import { createSlice  } from "@reduxjs/toolkit";



export const storeSlice = createSlice({
    name : 'my_store',
    initialState : {
        products : [],
        card : [],
        sideBar : false

    },

    reducers : {
        
        addToCard : (state,payload) => {
            state.card.push(payload)
        },
        ShowSideBzr :state => {
            state.sideBar = true
        },
        HideSideBar : state => {
            state.sideBar = false
        }
    }
})


export const { addToCard ,ShowSideBzr ,HideSideBar} = storeSlice.actions;


export const selectCard = state => state.my_store.card;
export const addProducts = state => state.my_store.products;
export const selectSideBar = state => state.my_store.sideBar;


export default storeSlice.reducer