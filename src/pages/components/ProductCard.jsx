import Image from "next/image"

export function ProductCard({title}){
    return (
        <div className="inline-block mt-4 px-2 cursor-pointer">                
            <div>                    
                <div className="absolute bg-black px-2 py-1 w-36 rounded-r-lg">
                    <p className="text-white text-base">Pedrisco - 1/4"</p>                                                
                </div>
                <Image src='/sproduto1.jpg' width={304} height={304} alt='Produto' />                 
            </div>  
            <div className="inline-block px-2 py-2 w-[19.1rem] bg-[#D9D9D9] rounded-r-lg text-base">                       
                <p>Descrição comercial</p>
                <p>Densidade: 1,299 ton/m³</p> 
            </div>
        </div>       
    )
}