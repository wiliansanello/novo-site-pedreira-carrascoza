import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export function CarouselImages(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created(){
            setLoaded(true)
        },
    })

    console.log(instanceRef)

    return (
        <>
            <div className="relative">
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
                {loaded && instanceRef.current && (
                    <>
                        <AiOutlineLeft
                            onClick={(e)=> e.stopPropagation || instanceRef.current?.prev()}
                            className="absolute z-40 left-0 m-auto text-4xl text-transparent inset-y-1/2 cursor-pointer hover:text-gray-400 hover:bg-gray-700 hover:rounded-full"
                        />
                        <AiOutlineRight
                            onClick={(e)=> e.stopPropagation || instanceRef.current?.next()}
                            className="absolute right-0 m-auto text-4xl text-transparent inset-y-1/2 cursor-pointer hover:text-gray-400 z-20 hover:bg-gray-700 hover:rounded-full"
                        />
                    </>
                )}
            </div>
            {loaded && instanceRef.current && (
                
                <div className="flex justify-center pt-2">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map(idx => {
                        return(
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"flex justify-center pt-2"+ (currentSlide === idx ? "bg-gray-700" : "")}
                            ></button>
                        )                        
                    })}
                </div>
            )}
        </>
    )

}