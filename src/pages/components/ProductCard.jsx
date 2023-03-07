import Image from "next/image"

export function ProductCard({title}){
    return (
        <>
        <div className="border-b-2 border-[#9B8F8F] mb-4 text-center">
            <h2 className="text-3xl text-center mt-7">{title}</h2>
        </div>
        <div className="inline-block">                        
            <div className="mt-4 px-2">                
                <div>                    
                    <div className="absolute bg-black px-2 py-1 w-36 rounded-r-lg">
                        <p className="text-white text-base">Pedrisco - 1/4"</p>                                                
                    </div>
                    <Image src='/sproduto1.jpg' width={304} height={304} alt='Produto' />                 
                </div>  
                <div className="inline-block py-2 w-[19.1rem] bg-[#D9D9D9] rounded-r-lg text-sm">                       
                   <p>Descrição comercial</p>
                   <p>Densidade: 1,299 ton/m³</p> 
                   <p>Laboratório da análise: Próprio</p>
                   <p>Data da análise: 09/2015</p>
                </div>
            </div>
        </div>
        </>
    )
}