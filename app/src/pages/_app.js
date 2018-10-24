import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { PageTransition } from 'next-page-transitions'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

import { LayoutHeader, FooterLayout } from '../layout'
import { StyledContent } from './style/app'
import { loadPosts } from '../reducers/actions'

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentWillMount () {
    this.props.reduxStore.dispatch(loadPosts())
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <>
        <Head>
          <title>Next test with Jest example </title>
        </Head>
        <Container classNames='main-container'>
          <Provider store={reduxStore}>
            <>
              <LayoutHeader />
              <PageTransition timeout={300} classNames='page-transition'>
                <StyledContent style={{
                  margin: 'auto',
                  paddingBottom: 50,
                  paddingTop: 0,
                  minHeight: '80vh' }} >
                  <Component {...pageProps} />
                </StyledContent>
              </PageTransition>
              <FooterLayout />
            </>
          </Provider>
          <style jsx global>{`
            // Transition into pages
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
            // Global styles
            .ant-upload.ant-upload-select.ant-upload-select-picture-card.ant-upload-disabled{
                width: 100%;
                height: 200px;
            }
          `}</style>
        </Container>
      </>
    )
  }
}

export default withReduxStore(MyApp)
