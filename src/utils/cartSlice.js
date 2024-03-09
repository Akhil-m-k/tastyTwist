import {createSlice} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalPrice:0
    },
    reducers:{
        addItem:(state,action)=>{ // the state indicates the initial state
            state.items.push(action.payload);
            state.totalPrice += Math.ceil(action.payload.defaultPrice?Number(action.payload.defaultPrice)/100:Number(action.payload.price)/100)
        },
        removeItem:(state,action)=>{
            let index;
            for(let i=0; i<state.items.length; i++){
                if(state.items[i].name === action.payload.name){
                    index =i;
                }
            }
            state.items.splice(index,1);
            state.totalPrice -= Math.ceil(action.payload.defaultPrice?Number(action.payload.defaultPrice)/100:Number(action.payload.price)/100)
        },
        clearCart:(state)=>{
            state.items = [];
        },
        removeDuplicateItem:(state,action)=>{
           const count =state.items.filter((item)=> item.name === action.payload.name).length;
           state.items = state.items.filter((item)=> item.name !== action.payload.name);
           state.totalPrice = state.totalPrice - (Math.ceil(action.payload.defaultPrice?Number(action.payload.defaultPrice)/100:Number(action.payload.price)/100)*count)
        }
    }
});

export const {addItem,removeItem,clearCart,removeDuplicateItem} =cartSlice.actions;
export default cartSlice.reducer; /// here it is not reducers , here it combine all reducers and it named as reducer as default