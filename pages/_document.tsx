import Document, { Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: JSX.IntrinsicAttributes) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <Html>
            <link
              href="https://fonts.googleapis.com/css2?family=Inter&family=Nunito&family=Karla&family=Raleway&family=Catamaran:wght@900&family=Cabin:wght@700&display=swap"
              rel="stylesheet"
            />
            <body>
              <Main />
              <div id="overlays" />
              <NextScript />
              {initialProps.styles}
              {sheet.getStyleElement()}
            </body>
          </Html>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default MyDocument;
