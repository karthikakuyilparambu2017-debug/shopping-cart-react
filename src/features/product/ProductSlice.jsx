import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProduct=createAsyncThunk(
    // Action Name
    "products/fetchProduct",

    async() => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        return data;
    }
)
const ProductSlice=createSlice({
    name: "products",

    initialState:{
        item:[],
        loading:false,
        error:null,
    },
    reducers:{},

    extraReducers:(builder)=>{
        builder
        .addCase(
            fetchProduct.pending,
            (state)=>{
                state.loading=true;
            }
        )
        .addCase(
            fetchProduct.fulfilled,
            (state,action)=>{
                state.loading=false;
                state.item=action.payload;
            }
        )
        .addCase(
            fetchProduct.rejected,
            (state,action)=>{
                state.loading=false;
                state.error=action.error.message;
            }
        );
    }
});
 export default ProductSlice.reducer;