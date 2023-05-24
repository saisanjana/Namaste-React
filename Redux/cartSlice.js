import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload);
        },
        clearAllItems: (state) =>{
            state.items = []
        }
    }
});

export default cartSlice.reducer;
export const {addItem, clearAllItems} = cartSlice.actions;

