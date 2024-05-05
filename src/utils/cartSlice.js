import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItems:(state,action)=>{
          const found = state.items.find(element => element.card.info.id === action.payload.card.info.id)
          if(found === undefined){
            state.items.push(action.payload)
          }
        },
        removeItems: (state, action) => {
          const itemIdToRemove = action.payload.card.info.id;
          state.items = state.items.filter((item) => item.card.info.id !== itemIdToRemove);
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
})

{/* 

   
{
  name: "cart",
  reducer: {
    addItems: ƒ (state, action),
    removeItems: ƒ (state, action),
    clearCart: ƒ (state)
  },
  actions: {
    addItems: ƒ addItems(payload),
    removeItems: ƒ removeItems(payload),
    clearCart: ƒ clearCart()
  },
  initialState: { items: [] }
}
*/}

export const {addItems,removeItems,clearCart}=cartSlice.actions;
export default cartSlice.reducer;