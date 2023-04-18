import { ProductCard } from "./components/ProductCard";
import { api } from "../lib/axios";

export function Products() {

    /*async function getProductTechnicalFeatures() {
        try {
            const response = await api.get('/api/load-products');
            const { products } = response.data;
            console.log(products);

        } catch(err){

            console.log(err);
            alert("Falha ao carregar os produtos");

        }        
    }

    getProductTechnicalFeatures();
*/
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
                    <ProductCard title="Pedrisco" />         
                    <ProductCard title="Pedrisco" />
                </div>         
            </div>
    )
}

export const getServerSideProps = async() => {
    const response = await api.get('api/load-products');
    return {
        props: {
            products: response.data
        }
    }
}