import Head from 'next/head'
import PropTypes from 'prop-types'

const LayoutHead = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
  </Head>
)

LayoutHead.propTypes = {
  title: PropTypes.string
}

export default LayoutHead
