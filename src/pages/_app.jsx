import Head from 'next/head';

import '../styles/globals.css';
import { Header } from "./components/Header";
import { Whatsapp } from "./components/Whatsapp";
import { Footer } from "./components/Footer";

export default function App( {Component, pageProps} ) {
  return (
    <>
        <Head>
          <title>Pedreira Carrascoza: Pedra britada e areia para Ribeirão Preto e região</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="title" content="Pedreira Carrascoza: Pedra britada e areia para Ribeirão Preto e região" />
          <meta name="description" content="Pedreira Carrascoza: Pedra britada e areia para Ribeirão Preto e região"/>
          <link href="favicon.gif" rel="icon" type="image/gif" />
          <link href="favicon.ico" rel="shortcut icon" type="image/x-icon"/>          
      </Head>   
      <Header />
        <Component {...pageProps} />
        <Whatsapp />
      <Footer />        
    </>
   )
}