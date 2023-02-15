import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return(
    <Html>
        <Head>
            <title>Pedreira Carrascoza | Pedra britada e areia para Ribeirão Preto e região</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>
            <body className="bg-gray-900 bg-app bg-no-repeat bg-cover">
                <Main />
                <NextScript />
            </body>        
    </Html> 
    )
}