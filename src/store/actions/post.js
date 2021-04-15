import * as FileSystem from 'expo-file-system';
import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from "../types";
import {DB} from '../../db'


export const loadPosts = () => {
    return async dispatch => {
       const posts = await DB.getPosts()
       dispatch ({
            type: LOAD_POSTS,
            payload: posts
        })
    } 
} 

export const toggleBooked = id => ( {
    type: TOGGLE_BOOKED,
    payload: id
} )

export const removePost = id => ({
    type: REMOVE_POST,
    payload: id,
})

export const addPost = post => async dispatch => {

    console.log(post.img, "xxxxxxxx", FileSystem.documentDirectory);

    const fileName = post.img.split('/').pop()
    const newPath = FileSystem.documentDirectory + fileName

    try {
        await FileSystem.moveAsync({
            to: newPath,
            from: post.img
        })
    } catch (e) {
        console.log("error:", e);
    }

    const payload = {...post, img: newPath}
   
    const id = await DB.createPost(payload)
    payload.id = id;

    dispatch({
        type: ADD_POST,
        payload
    })
}