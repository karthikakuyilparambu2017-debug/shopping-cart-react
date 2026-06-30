import { createSlice } from "@reduxjs/toolkit";

const savedItem=localStorage.getItem("cart");
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartItem:savedItem? JSON.parse(savedItem):[],
    },
    reducers:{
        addToCart:(state,action)=>{
            const cart=state.cartItem.find(
                (prod) => prod.id === action.payload.id
            )
            if(cart){
                cart.quantity +=1;
            }
            else {
                state.cartItem.push({
                    ...action.payload,
                    quantity :1
            })
            }
        },
        removeFromCart:(state,action )=>{
            const cart=state.cartItem.find(
                (cart)=>cart.id === action.payload
            );
            if(cart.quantity>1){
                cart.quantity-= 1;
            } else{
                state.cartItem=state.cartItem.filter(
                      (item) => item.id !== action.payload
                )

            }

        },
        clearCart:(state)=>{
            state.cartItem=[]
        }
    }
})
export const { addToCart,removeFromCart,clearCart}=cartSlice.actions;
export default cartSlice.reducer;