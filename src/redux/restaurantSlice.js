import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

//for calling Api in redux/slice we use thunk
export const fetchResturant=createAsyncThunk('restaurantList/fetchResturant',()=>{
    const result=axios.get('/restaurant[1].json').then(response=>response.data);
    console.log("=========result=======",result)
    return result

})

const restaurantSlice = createSlice({
    name:"restaurantList",
    initialState:{
        loading:false,
        allRestuarant:[],
        err:"",
        searchRestuarant:[],




    },
    extraReducers:(builder)=>{
        builder.addCase(fetchResturant.pending,(state)=>{
            state.loading=true;

        })
        builder.addCase(fetchResturant.fulfilled,(state,action)=>{
            state.loading=false
            state.allRestuarant=action.payload
            state.searchRestuarant=action.payload
            state.err=""
        })
        builder.addCase(fetchResturant.rejected,(state,action)=>{
            state.loading= false
            state.allRestuarant=[]
            state.err=action.error.message
            
        })
    },
    reducers:{
        search:(state,action)=>{
            state.allRestuarant.restaurants=state.searchRestuarant.restaurants.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})
export default restaurantSlice.reducer
export const {search}=restaurantSlice.actions