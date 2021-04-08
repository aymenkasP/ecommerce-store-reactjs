import { createSlice  } from "@reduxjs/toolkit";



export const storeSlice = createSlice({
    name : 'my_store',
    initialState : {
        products : [],
        card : {
            items :[],
            totPrice :0

        } ,
        sideBar : false,
        category :""

    },

    reducers : {
        
        addToCard : (state,payload) => {
            state.card.items.push(payload)
        },
        ShowSideBzr :state => {
            state.sideBar = true
        },
        HideSideBar : state => {
            state.sideBar = false
        },

        category : (state , payload) => {
            state.category = payload
        },

        totPriceFun : (stats , action) => {
            stats.card.totPrice += action.payload
        },
        totPriceFunEdit : (stats , action) => {
            stats.card.totPrice -= action.payload
        }

    }
})


export const { addToCard ,ShowSideBzr ,HideSideBar ,category ,totPriceFun , totPriceFunEdit} = storeSlice.actions;


export const selectCard = state => state.my_store.card.items;
export const addProducts = state => state.my_store.products;
export const selectSideBar = state => state.my_store.sideBar;
export const selectCategory = state => state.my_store.category;
export const selectTotPrice = state => state.my_store.card.totPrice;


export default storeSlice.reducer