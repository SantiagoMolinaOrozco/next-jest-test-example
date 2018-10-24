import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Alert } from 'antd'
import _ from 'lodash'

import Card from '../components/card'

export const App = ({ posts, loading, error }) => (
  <Row className='posts' style={{ marginTop: 50, maxWidth: 1140, margin: 'auto' }}>
    { posts.length === 0 && !loading && !error && (
      <Alert
        className='alert-info'
        message='Sorry'
        description='In this moment we do not have posts.'
        type='info'
        showIcon />
    )}
    { posts.length === 0 && !loading && error && (
      <Alert
        className='alert-error'
        message='Error'
        description='Sorry, we have problems for load the posts.'
        type='error'
        showIcon
      />
    )}
    { posts.length !== 0 && !loading ? _.map(posts, (post, index) => (
      <Cards post={post} key={index} loading={loading} />
    )) : _.times(6, (index) => (
      <Cards key={index} loading={error ? true : loading} />
    ))}
  </Row>
)

const Cards = ({ post, loading }) => (
  <Col className={loading || !post ? 'loading' : 'post'} style={{ paddingLeft: 20, paddingRight: 20 }} xs={24} sm={12} md={{ span: 7 }} >
    <Card post={post} loading={loading} />
  </Col>
)

App.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool
}

Cards.propTypes = {
  post: PropTypes.object,
  loading: PropTypes.bool
}

export default connect(
  (state) => state.posts
)(App)
