import { useState } from "react"

export function ProductCard(props){

    const [visible, setVisible] = useState(false);
    const [display, setDisplay] = useState('none')
    const [toggleShow, setToggleShow] = useState('hidden');

    function showProductDescription(){
        setVisible(!visible)

        if (visible === true){
            setToggleShow('visible')
            setDisplay('flex')
        } else {
            setToggleShow('hidden')
            setDisplay('none')
        }

        document.getElementById("product-description").style.display = display
        document.getElementById("product-description").style.visibility = toggleShow
        document.getElementById("return-catalog").style.display = display
        document.getElementById("return-catalog").style.visibility = toggleShow

    }
    
    return (
        <div className="flex flex-row mt-4 mb-16 gap-4">
            <div className="inline-block">
                <div className=" px-2 cursor-pointer drop-shadow-lg transition duration-200 ease-out" onClick={showProductDescription}>                
                    <div>                    
                        <div className="absolute bg-black px-2 py-1 w-36 rounded-r-lg">
                            <p className="text-white text-base">{props}</p>                                                
                        </div>
                        <img src='/sproduto1.jpg' width={304} height={304} alt='Produto' />                 
                    </div>  
                    <div className="inline-block px-2 py-2 w-[19.1rem] bg-[#D9D9D9] rounded-r-lg text-base">                       
                        <p>{props.description}</p>
                        <p>Densidade: ${props.density}</p> 
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div 
                    id="product-description"
                    className="hidden border-solid border-2 solid-black rounded-md w-[19.5rem] md:w-[43rem]" //md:w-screen
                > 
                    <p className="mx-4 my-1 indent-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet viverra risus in consequat. Praesent tristique vitae mi at porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Pellentesque lacus est, convallis nec malesuada vitae, auctor sit amet nunc. Suspendisse gravida orci in tortor viverra condimentum. </p>
                </div>
                <a
                    id="return-catalog"
                    onClick={showProductDescription} 
                    className="hidden bg-white border-none mt-8 font-bold hover:text-orange-400 cursor-pointer"
                >
                        RETORNAR AO CATÁLOGO
                </a>
            </div>
        </div>
    )
}