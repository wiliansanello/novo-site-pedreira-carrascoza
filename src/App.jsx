import { useState, useEffect } from 'react';

import { api } from './lib/axios';

import './styles/globals.css';

import { Header } from './pages/components/Header';
import { CarouselImages } from './pages/components/CarouselImages';
import { Whatsapp } from './pages/components/Whatsapp';
import { Footer } from "./pages/components/Footer";
import { AboutUs } from './pages/sobre-nos';
import { Mission } from './pages/missao';
import { Quality } from './pages/qualidade';
import { Products } from './pages/produtos';
import { Remineralizer } from './pages/remineralizador';
import { CitiesServed} from './pages/cidades-atendidas';
import { FindUs } from './pages/encontre-nos';
import { Contact } from './pages/contato';
import { useScroll } from 'framer-motion';
import { ProductModal } from './pages/components/ProductModal';
import { ProductCard } from './pages/components/ProductCard';

function App() {

  /*const [productsData, setProductsData] = useState([]);

  useEffect(()=>{        
    const response = api.get('load-products/')
        .then((res)=>{console.log(res)})
        .catch((err)=> {console.log(err)});
        setProductsData(response.data);
  },[]);*/

  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  
  return (
    <>
      <title>Pedreira Carrascoza: Pedra britada para Ribeirão Preto e região</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="title" content="Pedreira Carrascoza: Pedra britada e areia para Ribeirão Preto e região" />
          <meta name="description" content="Pedreira Carrascoza: Pedra britada e areia para Ribeirão Preto e região"/>
          <link href="favicon.gif" rel="icon" type="image/gif" />
          <link href="favicon.ico" rel="shortcut icon" type="image/x-icon"/>            
      <Header />
        <CarouselImages />
        <AboutUs />
        <Quality />
        <Mission />        
        <Products />                       
        <Remineralizer />
        <CitiesServed />
        <FindUs />
        <Contact />
        <Whatsapp />        
      <Footer />        
    </>
  )
}

export default App
