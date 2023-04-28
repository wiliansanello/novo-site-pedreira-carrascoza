import { ProductCard } from './components/ProductCard';
import { api } from '../lib/axios';
import * as dotenv from 'dotenv';

export async function Products() {

    dotenv.config();
    const response = await api.get(process.env.SERVER_ADDRESS+'load-products/');
    console.log(response.data);

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
                <ProductCard product={
                    {
                        title:"Pedrisco 1/4 pol", 
                        description:"Descrição comercial resumida", 
                        density:"1.299 ton/m³"
                    }
                }/>
            </div>         
        </div>
    )
}

