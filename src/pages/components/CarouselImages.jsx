import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export function CarouselImages(){
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false

            function clearNextTimeout() {
              clearTimeout(timeout)
            }

            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }

            slider.on("created", () => {

              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })

              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })

              nextTimeout()

            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )   

    return (
        <>
       
                <div ref={sliderRef} className="keen-slider">
                    <div>
                        <Image src="/banner1.jpg" fill className="snap-x scroll-smooth object-contain" alt="Imagens da Pedreira Carrascoza"/>
                    </div>
                    <div>
                        <Image src="/banner2.jpg" fill className="snap-x scroll-smooth object-contain" alt="Imagens da Pedreira Carrascoza"/>
                    </div>
                    <div>
                        <Image src="/banner3.jpg" fill className="snap-x scroll-smooth object-contain" alt="Imagens da Pedreira Carrascoza"/>
                    </div>
                    <div>
                        <Image src="/banner4.jpg" fill className="snap-x scroll-smooth object-contain" alt="Imagens da Pedreira Carrascoza"/>
                    </div>
                    <div>
                        <Image src="/banner5.jpg" fill className="snap-x scroll-smooth object-contain" alt="Imagens da Pedreira Carrascoza"/>
                    </div>
                </div>                
                      
        </>
    )

}