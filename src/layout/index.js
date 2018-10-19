import Header from '../components/header'
import PropTypes from 'prop-types'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.array
}

export default Layout
