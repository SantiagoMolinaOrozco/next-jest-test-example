import axios from 'axios'

import actionTypes, { urlApi } from './constants' 

export const loadPosts = () => dispatch => axios.get(`${urlApi}posts`)
  .then(response => {
    dispatch({
      type: actionTypes.REPLACE_POSTS,
      posts: response.data
    })
  })
  .catch((message) => {
    console.log(message.Error)
    dispatch({
      type: actionTypes.ERROR_TO_REPLACE_POSTS
    })
  })

export const addPost = (params) => dispatch => axios.post(`${urlApi}posts`, params)
  .then(response => {
    dispatch({
      type: actionTypes.ADD_POST,
      post: response.data
    })
  })
  .catch((message) => {
    console.log(message.Error)
    dispatch({
      type: actionTypes.ERROR_TO_ADD_POST
    })
  })