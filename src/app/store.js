//redux store
import {configureStore} from "@reduxjs/toolkit"
import postReducer from "../features/post/postSlice"
import usersReducer from "../features/users/usersSlice";

const store = configureStore({
    reducer: {
        post: postReducer,
        users: usersReducer
        //counter: counterReducer
        //başka reducerlı olan slice varsa onlar buraya
    }
})

export default store;