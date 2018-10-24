import Link from 'next/link'
import { Layout, Icon } from 'antd'

const { Footer } = Layout

export const FooterLayout = () => (
  <Footer className='footer' style={{ textAlign: 'center', marginTop: 100 }}>
    developed by Santiago Molina, made with <Icon type='heart' theme='twoTone' /> / website map
    <Link href='/'><a> Posts </a></Link> - <Link href='/add-post'><a>New post</a></Link>
    <br />
    You are free to use this website for anything
  </Footer>
)
