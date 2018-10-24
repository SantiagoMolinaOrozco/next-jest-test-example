import PropTypes from 'prop-types'
import Link from 'next/link'
import { Card, Button, Row, Col } from 'antd'
import _ from 'lodash'

const { Meta } = Card

const ItemCard = ({ post, loading }) => {
  const { id, title, description, photoUrl, tags } = post || ''
  return (
    <Card
      hoverable
      style={{ width: '100%', marginTop: 20 }}
      loading={loading}
      bodyStyle={{ padding: 0 }}
      cover={<img style={{ maxHeight: 150, objectFit: 'cover' }} alt={id} src={photoUrl} />}
    >
      <Meta
        title={title}
        description={description}
        style={{ padding: 16 }}
      />

      <Card
        style={{ border: 'transparent', borderTop: '1px solid #e8e8e8', borderRadius: 0 }}
        bodyStyle={{ padding: '8px 16px' }} >
        <Row type='flex' align='middle'>
          <Col span={16}>
            { _.map(tags, (tag, index) => `${index !== 0 ? ', ' : ''}${tag}`) }
          </Col>
          <Col span={8}>
            <Link href={{ pathname: '/post', query: { id: post ? post.id : '' } }}>
              <a>
                <Button style={{ borderRadius: 130 }}>
                  View
                </Button>
              </a>
            </Link>
          </Col>
        </Row>
      </Card>
    </Card>
  )
}

ItemCard.propTypes = {
  loading: PropTypes.bool,
  post: PropTypes.object
}

export default ItemCard
