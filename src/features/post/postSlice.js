//sliceta dispatch var, useSelector var 
//slice is where we divide up our state

import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = [
    { id: '1', title: "mock text", content: "my content" },
    { id: '2', title: "mock text2", content: "my content 2" },
]

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) { 
            state.push(action.payload)
         }, 
            prepare(title,content, userId){
                return{
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
    }
}
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions; //reducers ın isimleri buraya yazılacak
export default postSlice.reducer;