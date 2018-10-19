import Layout from '../src/layout'
import Link from 'next/link'
import PropTypes from 'prop-types'
import axios from 'axios'

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.propTypes = {
  shows: PropTypes.array
}

Index.getInitialProps = async () => {
  const { data: shows } = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
  console.log(`Show data fetched. Count: ${shows.length}`)

  return { shows }
}

export default Index
