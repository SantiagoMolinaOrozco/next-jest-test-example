import { render } from 'enzyme'
import React from 'react'
import configureStore from 'redux-mock-store'
import { expect } from 'chai'

import ConnectedApp from '../index.js'

const middlewares = []
const mockStore = configureStore(middlewares)

const posts = [{
  'id': '321c04d0-a25f-11e8-ad0a-1d90dd5e7d7c',
  'title': 'first post in the world',
  'description': 'this is a post description for a post with a post post',
  'photoUrl': 'http://localhost:3000/images/52dcf130-a268-11e8-aec5-a13ee2174102.png',
  'tags': ['first', 'test']
}]

describe('Load correctly', () => {
  it('Renders no products when store is empty', () => {
    const store = mockStore({ posts: { posts: [], loading: false, error: false } })
    const wrapper = render(<ConnectedApp store={store} />)
    expect(wrapper.find('.post').length).to.equal(0)
    expect(wrapper.find('.loading').length).to.equal(6)
    expect(wrapper.find('.alert-info').length).to.equal(1)
  })

  it('Get error to load posts', () => {
    const store = mockStore({ posts: { posts: [], loading: false, error: true } })
    const wrapper = render(<ConnectedApp store={store} />)
    expect(wrapper.find('.loading').length).to.equal(6)
    expect(wrapper.find('.alert-error').length).to.equal(1)
  })

  it('Loading posts', () => {
    const store = mockStore({ posts: { posts: [], loading: true, error: false } })
    const wrapper = render(<ConnectedApp store={store} />)
    expect(wrapper.find('.loading').length).to.equal(6)
  })

  it('Renders posts', () => {
    const store = mockStore({ posts: { posts: posts, loading: false, error: false } })
    const wrapper = render(<ConnectedApp store={store} />)
    expect(wrapper.find('.post').length).to.equal(1)
  })
})
