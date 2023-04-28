import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsFillCircleFill } from 'react-icons/bs'

export function CarouselImages(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider({
          loop: true,
          initial: 0,
          slideChanged(slider){
            setCurrentSlide(slider.track.details.rel);
          }
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
              }, 4000)
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
        <div className="relative top-16 md:top-[4.5rem]">       
          <div ref={sliderRef} className="keen-slider">      
             <div className="keen-slider__slide">
              <img src='banner1.jpg'/>
             </div>
             <div className="keen-slider__slide">
              <img src='banner2.jpg'/>
             </div>
             <div className="keen-slider__slide">
              <img src='banner3.jpg'/>
             </div>
             <div className="keen-slider__slide">
              <img src='banner4.jpg'/>
             </div>
             <div className="keen-slider__slide">
              <img src='banner5.jpg'/>
             </div>             
          </div>

          {instanceRef.current && (
            <div className="hidden md:flex absolute top-48">
              <AiOutlineLeft 
                size={72} 
                className="cursor-pointer text-transparent hover:text-orange-400"
                onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
                disabled={currentSlide === 0}
              />
              <AiOutlineRight
                size={72}
                className="cursor-pointer text-transparent hover:text-orange-400 absolute left-[76rem]" // md:left-[87rem] lg:left-[97rem]
                onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
                disabled={currentSlide === instanceRef.current.track.details.slides.length - 1} 
              />       
          </div>
          )}
          
          {instanceRef.current && (
          <div className="hidden md:flex absolute top-[22rem] left-[37rem] space-x-4 cursor-pointer"> {/*top-96 left-[39rem]*/}
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx)=>{
              return(
                <BsFillCircleFill
                  key={idx} 
                  onClick={()=>{instanceRef.current?.moveToIdx(idx)}}
                  size={12} 
                  className={(currentSlide === idx ? "text-orange-400" : "text-slate-200")}
                />
              )
            })}           
          </div>
          )}
        </div>
    
  )
}