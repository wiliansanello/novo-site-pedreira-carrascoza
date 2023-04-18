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

    }
    
    return (
        <div className="flex flex-wrap mt-4 gap-4">
            <div className="inline-block">
                <div className=" px-2 cursor-pointer drop-shadow-lg transition duration-200 ease-out" onClick={showProductDescription}>                
                    <div>                    
                        <div className="absolute bg-black px-2 py-1 w-36 rounded-r-lg">
                            <p className="text-white text-base">Pedrisco - 1/4"</p>                                                
                        </div>
                        <img src='/sproduto1.jpg' width={304} height={304} alt='Produto' />                 
                    </div>  
                    <div className="inline-block px-2 py-2 w-[19.1rem] bg-[#D9D9D9] rounded-r-lg text-base">                       
                        <p>Descrição comercial</p>
                        <p>Densidade: 1,299 ton/m³</p> 
                    </div>
                </div>
            </div>
            <div id="product-description" className="hidden border-solid border-2 solid-black rounded-md w-[19.5rem] md:w-screen">
                <p className="mx-4 my-1 indent-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet viverra risus in consequat. Praesent tristique vitae mi at porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Pellentesque lacus est, convallis nec malesuada vitae, auctor sit amet nunc. Suspendisse gravida orci in tortor viverra condimentum. </p>

            </div>
        </div>
    )
}