import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurantSlice";

const store= configureStore({
    reducer:{

        restaurentSlice:restaurantSlice
    }
})
export default store