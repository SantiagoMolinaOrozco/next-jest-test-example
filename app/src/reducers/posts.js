import _ from 'lodash'

import actionTypes, { urlApi } from './constants'

const initialState = {
  posts: [],
  loading: true,
  error: false,
  save: false,
  post: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return ({
        posts: [ ...state.posts, action.post ],
        save: true,
        post: action.post
      })

    case actionTypes.ERROR_TO_ADD_POST:
      return ({
        save: false
      })

    case actionTypes.REPLACE_POSTS:
      _.forEach(action.posts, (post) => {
        post.photoUrl = `${urlApi}${post.photoUrl}`
      })

      return ({
        ...state,
        posts: action.posts,
        loading: false,
        error: false
      })

    case actionTypes.ERROR_TO_REPLACE_POSTS:
      return ({
        ...state,
        loading: false,
        error: true
      })

    default: return state
  }
}