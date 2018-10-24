import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import stylesheet from 'antd/dist/antd.min.css'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"' />
          <link rel="icon" href="/static/assets/favicon.png"></link>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
