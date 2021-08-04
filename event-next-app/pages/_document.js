import Document, {Head, Main, NextScript, Html} from 'next/document';

class MyDocument extends Document {

    render() {
        return (
            <Html lang='en'>
                <Head />
                <body>
                    <div id='overlays'></div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
            );
    }
};

export default MyDocument;