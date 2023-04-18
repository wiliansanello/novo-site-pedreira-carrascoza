import { ProductCard } from "./components/ProductCard";
import { api } from "../lib/axios";

export async function Products() {

    //const response = await api.get('localhost:80/load-products');
    //console.log(response.data);

    return (
        <div className="mx-6 md:mx-12">
            <h1 className="pt-8 text-bold text-4xl text-center">Produtos</h1>
            <div className="text-base md:text-lg md:px-20">
                <p className="py-8 text-justify md:text-center">
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

