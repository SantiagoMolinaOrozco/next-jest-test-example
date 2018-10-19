import Layout from '../src/layout'
import PropTypes from 'prop-types'
import axios from 'axios'

const Post = (props) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
)

Post.propTypes = {
  show: PropTypes.any
}

Post.getInitialProps = async (context) => {
  const { id } = context.query
  const { data: show } = await axios.get(`https://api.tvmaze.com/shows/${id}`)

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
