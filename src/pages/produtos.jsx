import { ProductCard } from './components/ProductCard';
import { api } from '../lib/axios.js';

export function Products() {

    function fetchProductData(){        
        const response = api.get(import.meta.env.VITE_SERVER_ADDRESS+'load-products/')
            .then((res)=>{console.log(res)})
            .catch((err)=> {console.log(err)});

            return response;
    }

    fetchProductData();
        
   return (
        <div className="mx-6 md:mx-12">
            <h1 className="pt-8 text-bold text-4xl text-center">Produtos</h1>
            <div className="text-base md:text-lg indent-8">
                <p className="pt-8 pb-4 text-justify md:text-center">
                    Clique no card do produto desejado para obter mais informações. Se desejar fazer um orçamento, clique no ícone 
                    do WhatsApp no canto inferior direito e fale com um de nossos vendedores.
                </p>
            </div>
            <div className="flex flex-col md:flex-row">
                <ProductCard 
                    title = "Pedrisco 1/4 pol"
                    description = "Descrição Comercial"
                    density = "1.299 ton/m³"
                />
            </div>         
        </div>
    )
}

