import axios from 'axios';
export const FETCH_POST="FETCH_POST";
const API_KEY='?key=sandesh251189';
const ROOT_URL="http://reduxblog.herokuapp.com";
export function fetchPosts(){
const url=`${ROOT_URL}/api/posts${API_KEY}`;
const request=axios.get(`${ROOT_URL}/api/posts${API_KEY}`)
    return{
      type:FETCH_POST,
      payload:request
    }
}
