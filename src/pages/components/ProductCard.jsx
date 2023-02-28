export function ProductCard({title}){
    return (
        <>
        <div className="border-b-2 border-[#9B8F8F] mb-4 text-center">
            <h2 className="text-3xl text-center mt-7">{title}</h2>
        </div>
        <div className="inline-block">                        
            <div className="mt-4 px-2 cursor-pointer">                
                <div className="bg-default-product w-76 h-48">                
                    <div className="inline-block bg-black pt-1 pb-1 pl-3 pr-12 rounded-r-lg">
                        <p className="text-white text-base">Pedrisco - 1/4"</p>                        
                    </div>                 
                </div>  
                <div className="inline-block pt-2 pb-2 pl-4 pr-24 bg-[#D9D9D9] rounded-r-lg text-sm">                       
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