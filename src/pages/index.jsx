
import foto1 from "../../public/banner1.jpg";
import foto2 from "../../public/banner2.jpg";
import foto3 from "../../public/banner3.jpg";
import foto4 from "../../public/banner4.jpg";
import foto5 from "../../public/banner5.jpg";

import { Carousel } from "./components/Carousel";
import { CarouselImages } from "./components/CarouselImages";
import { CompanyMap } from "./components/CompanyMap";

export default function Home() {
        
    
    return (
        <div>
            <CarouselImages />
           {/*<Carousel images={[foto1, foto2, foto3, foto4, foto5]} />*/} 

        </div>
    )
}

