import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

const Post = ({ id, posts }) => {
  const currentPost = _.find(posts, (post) => {
    return post.id === id
  })

  if (currentPost) {
    const { photoUrl, title, description, tags } = currentPost
    return (
      <div>
        <img
          style={{ maxHeight: 500, objectFit: 'cover', width: '100%', marginBottom: 50 }}
          src={photoUrl} />
        <div style={{ maxWidth: 1140, margin: 'auto' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>{title}</h1>
          </div>
          <p style={{ marginBottom: 50 }}>{description}</p>
          <p> { _.map(tags, (tag, index) => `${index !== 0 ? ', ' : ''}${tag}`) } </p>
        </div>
      </div>
    )
  }
  return <></>
}

Post.propTypes = {
  id: PropTypes.string,
  posts: PropTypes.object
}

Post.getInitialProps = async (context) => {
  const { id } = context.query
  return { id }
}

export default connect(
  (state) => state.posts
)(Post)
