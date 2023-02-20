import Image from "next/image";
import foto1 from "../../public/foto_banner1.jpg";
import foto2 from "../../public/foto_banner2.jpg";
import foto3 from "../../public/foto_banner3.jpg";
import foto4 from "../../public/foto_banner4.jpg";
import foto5 from "../../public/foto_banner5.jpg";

import { Whatsapp } from "./components/Whatsapp";

export default function Home() {

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides"); //avaliar outra forma de obter os valores
        for (i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 2000);
    }
    return (
        <div>
            <div className="max-w-5xl relative m-auto">
                <div className="hidden duration-150 fade">
                    <div className="absolute top-0 px-8 py-12 font-sm bg-gray-300">1/5</div>
                    <Image src={foto1} alt="Carrossel de imagens da Pedreira Carrascoza" />
                </div>
            </div>

            <div className="max-w-5xl relative m-auto">
                <div className="hidden duration-150 fade">
                    <div className="absolute top-0 px-8 py-12 font-sm bg-gray-300">2/5</div>
                    <Image src={foto2} alt="Carrossel de imagens da Pedreira Carrascoza" />
                </div>
            </div>

            <div className="max-w-5xl relative m-auto">
                <div className="hidden duration-150 fade">
                    <div className="absolute top-0 px-8 py-12 font-sm bg-gray-300">3/5</div>
                    <Image src={foto3} alt="Carrossel de imagens da Pedreira Carrascoza" />
                </div>
            </div>

            <div className="max-w-5xl relative m-auto">
                <div className="hidden duration-150 fade">
                    <div className="absolute top-0 px-8 py-12 font-sm bg-gray-300">4/5</div>
                    <Image src={foto4} alt="Carrossel de imagens da Pedreira Carrascoza" />
                </div>
            </div>

            <div className="max-w-5xl relative m-auto">
                <div className="hidden duration-150 fade">
                    <div className="absolute top-0 px-8 py-12 font-sm bg-gray-300">5/5</div>
                    <Image src={foto5} alt="Carrossel de imagens da Pedreira Carrascoza" />
                </div>
            </div>

            <a
                onclick="plusSlides(-1)" 
                className="cursor-pointer absolute top-0.5 w-auto -mt-20 p-16 bg-white font-bold transition-timing-function: cubic-bezier(0, 0, 0.2, 1) rounded-tr select-none"
            >
                &#10094;
            </a>
            <a
                onclick="plusSlides(1)"
                className="cursor-pointer absolute top-0.5 w-auto -mt-20 p-16 bg-white font-bold transition-timing-function: cubic-bezier(0, 0, 0.2, 1) rounded-tr select-none"
            >
                &#10095;
            </a>
        </div>
    )
}

