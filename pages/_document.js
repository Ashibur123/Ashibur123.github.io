import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#0ea5e9" />
          <meta
            name="description"
            content="Ashibur Rahman - Senior SQA Engineer specializing in automation testing with expertise in Cypress, Selenium, and Playwright"
          />
          <meta name="keywords" content="SQA, Automation Testing, QA Engineer, Cypress, Selenium, Playwright, Software Testing" />
          <meta property="og:title" content="Ashibur Rahman | Senior SQA Engineer" />
          <meta
            property="og:description"
            content="Experienced SQA Engineer with expertise in automation and manual testing"
          />
          <meta property="og:image" content="/images/og-image.jpg" />
          <meta property="og:url" content="https://ashibur.dev" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;