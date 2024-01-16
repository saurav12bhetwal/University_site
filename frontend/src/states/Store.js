import Slice from "./reducer/reducer"
import { configureStore } from "@reduxjs/toolkit"

export default configureStore({
    reducer:{
        formvalue:Slice
    }
})