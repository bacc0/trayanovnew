import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
     static async getInitialProps(ctx) {
          const initialProps = await Document.getInitialProps(ctx)
          return { ...initialProps }
     }

     render() {
          return (
               <Html>
                    <Head />
                    <body>
                         {/* <div id="colibri_hype_container"
                                   class="HYPE_document"
                                   style={{
                                        // backgroundColor:'red',
                                        position: "absolute",
                                        top: 0,
                                        margin: 'auto',
                                        position: 'relative',
                                        width: '600px',
                                        height: '400px',
                                        overflow: 'hidden'
                                   }}/> */}

                                   
                         <Main />
                         <NextScript />

                         {/* <Script
                              // type="text/javascript"
                              // charset="utf-8"
                              src="colibri1.hyperesources/colibri_hype_generated_script.js?23464"
                              strategy="afterInteractive"
                         >
                         </Script> */}
                    </body>
               </Html>
          )
     }
}

export default MyDocument