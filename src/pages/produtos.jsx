import { ProductCard } from './components/ProductCard';

export function Products() {

          
   return (
        <div>
            <div className="mx-6 md:mx-12">
                <h1 className="pt-8 text-bold text-4xl text-center">Produtos</h1>
                <div className="text-base md:text-lg indent-8">
                    <p className="pt-8 pb-4 text-justify md:text-center">
                        Clique no card do produto desejado para obter mais informações. Se desejar fazer um orçamento, clique no ícone 
                        do WhatsApp no canto inferior direito e fale com um de nossos vendedores.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mx-6 md:mx-8"> 
                <ProductCard
                    title = "Pedrisco 1/4 pol"
                    imageUrl ="/sproduto1.jpg"
                    summary = "Pedrisco"
                    description = "O pedrisco é largamente utilizado na fabricação de concreto"
                    density = "1.299 ton/m³"
                />                        
                <ProductCard 
                    title = "BGS faixa A"
                    imageUrl ="/sproduto1.jpg"
                    summary = "BGS"
                    description = "O BGS é utilizado na aplicação de asfaltos"
                    density = "1.300 ton/m³"
                />
                <ProductCard 
                    title = "Areia de brita"
                    imageUrl ="/sproduto1.jpg"
                    summary = "Pó de pedra"
                    description = "Esse produto é aplicado em determinados tipos de obras"
                    density = "1.301 ton/m³"
                />                    
                <ProductCard 
                    title = "Bica solo"
                    imageUrl ="/sproduto1.jpg"
                    summary = "Bica"
                    description = "Bica solo pode ser utilizada tanto para paisagismo quanto para construção civil"
                    density = "1.302 ton/m³"
                />                                
            </div>
            <div className="flex mx-6 md:mx-8">
                <ProductCard 
                    title = "Pedra 1/2"
                    imageUrl ="/sproduto1.jpg"
                    summary = "1/2"
                    description = "Utilizada para asfaltos e forragem dos mais variados terrenos"
                    density = "1.303 ton/m³"
                />                     
            </div>
        </div>
        
    )
}

