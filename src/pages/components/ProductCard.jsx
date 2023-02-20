export function ProductCard({title}){
    return (
        <div className="inline-block">            
            <div className="mt-4 px-2">
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
    )
}