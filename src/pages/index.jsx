import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import foto1 from "../../public/banner1.jpg";
import foto2 from "../../public/banner2.jpg";
import foto3 from "../../public/banner3.jpg";
import foto4 from "../../public/banner4.jpg";
import foto5 from "../../public/banner5.jpg";

import { Whatsapp } from "./components/Whatsapp";
import { Carousel } from "./components/Carousel";

export default function Home() {
        
    
    return (
        <div>
            <Carousel images={[foto1, foto2, foto3, foto4, foto5]} />    
        </div>
    )
}

