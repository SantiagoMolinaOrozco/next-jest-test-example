import Link from 'next/link'
import Router from 'next/router'
import { Layout, Menu, Affix, Row, Col } from 'antd'

import { StyledLogo, StyledIconContainer, StyledIcon } from './style/header'

const validateCurrentPath = (path) => process.browser ? Router.pathname !== path : true

export const LayoutHeader = () => (
  <Affix>
    <Layout.Header>
      <Row style={{ maxWidth: 1140, margin: 'auto' }}>
        <Col span={6}>
          <Row type='flex' justify='start'>
            <Link href='/'>
              <a>
                <StyledLogo src='/static/assets/logotipo.png' />
              </a>
            </Link>
          </Row>
        </Col>
        <Col span={18}>
          <Row type='flex' justify='end'>
            <Menu
              theme='dark'
              mode='horizontal'
              style={{ lineHeight: '64px' }}>
              { validateCurrentPath('/') &&
              <Menu.Item key='0'>
                <Link href='/'>
                  <a>
                    Posts
                  </a>
                </Link>
              </Menu.Item> }
              { validateCurrentPath('/add-post') &&
              <Menu.Item key='1'>
                <Link href='/add-post'>
                  <a>
                    <StyledIconContainer>
                      <StyledIcon type='plus' theme='outlined' />
                    </StyledIconContainer>
                  </a>
                </Link>
              </Menu.Item> }
            </Menu>
          </Row>
        </Col>
      </Row>
    </Layout.Header>
  </Affix>
)
