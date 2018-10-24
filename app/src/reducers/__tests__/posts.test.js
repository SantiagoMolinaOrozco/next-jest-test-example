// import { expect } from 'chai'

// import postReducer from '../posts'
// import actionTypes from '../actions'

// const posts = [{
//   'id': '321c04d0-a25f-11e8-ad0a-1d90dd5e7d7c',
//   'title': 'first post in the world',
//   'description': 'this is a post description for a post with a post post',
//   'photoUrl': 'http://localhost:3000/images/52dcf130-a268-11e8-aec5-a13ee2174102.png',
//   'tags': ['first', 'test']
// }]

// it('initial state', () => {
//   expect(reducerPosts({}, {})).to.equal({
//     posts: [],
//     loading: true,
//     error: false
//   })
// })

// it('Load posts correctly', () => {
//   expect(reducerPosts({}, {
//     type: actionTypes.REPLACE_POSTS,
//     posts: posts
//   })).to.equal({
//     posts: posts,
//     loading: false,
//     error: false
//   })
// })
