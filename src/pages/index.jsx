import { CarouselImages } from "./components/CarouselImages";

import { CompanyMap } from "./components/CompanyMap";
import { AboutUs } from "./sobre-nos";
import { Mission } from "./missao";
import { Quality } from "./qualidade";
import { Products } from "./produtos";
import { CitiesServed } from "./cidades-atendidas";
import { Contact } from "./contato";
import { Remineralizer } from "./remineralizador";

export default function Home() {
        
    return (
        <div>
           <CarouselImages />
            <AboutUs />
            <Mission />
            <Quality />
            <Products />
            <Remineralizer />
            <CitiesServed />
            <CompanyMap />
            <Contact />        
        </div>
    )
}

