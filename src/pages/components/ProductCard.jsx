export function ProductCard(props){
    
    return (
        <div className="flex flex-row mt-4 mb-16 gap-4">
            <div className="inline-block">
                <div className=" px-2 cursor-pointer drop-shadow-lg transition duration-200 ease-out">                
                    <div>                    
                        <div className="absolute bg-black px-2 py-1 w-36 rounded-r-lg">
                            <p className="text-white text-base">{props.title}</p>                                                
                        </div>
                        <img src='/sproduto1.jpg' width={304} height={304} alt='Produto' />                 
                    </div>  
                    <div className="inline-block px-2 py-2 w-[19.1rem] bg-[#D9D9D9] rounded-r-lg text-base">                       
                        <p>{props.description}</p>
                        <p>Densidade: {props.density}</p> 
                    </div>
                </div>
            </div>           
        </div>
    )
}