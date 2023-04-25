import { ProductCard } from './components/ProductCard';

export function Products() {

   return (
        <div className="mx-6 md:mx-12">
            <h1 className="pt-4 text-bold text-4xl text-center">Produtos</h1>
            <div className="text-base md:text-lg md:px-20 indent-8">
                <p className="pt-4 pb-4 text-justify md:text-center">
                    Clique no card do produto desejado para obter mais informações. Se desejar fazer um orçamento, clique no ícone 
                    do WhatsApp no canto inferior direito e fale com um de nossos vendedores.
                </p>
            </div>
            <div className="flex flex-col md:flex-row">
                <ProductCard title="Pedrisco" />         
            </div>         
        </div>
    )
}

