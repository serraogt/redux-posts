import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postSlice";
import React from 'react'

//it recieves the state and we get states.post

//if the shape of the state ever changes, we dont need to change each component. we just change slices



export const PostList = () => {
    const posts = useSelector(state => state.posts)


    const renderedPosts = posts.map(post=> (
        <article key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.content.substring(0,100)}</p>
    </article> 
    ))


  return (

    <div>{renderedPosts}</div>
  )
}
