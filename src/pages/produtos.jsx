import { ProductCard } from "./components/ProductCard";

export function Products() {

    return (
            <div className="mx-6 md:mx-12">
                <h1 className="pt-28 text-bold text-5xl text-center">Produtos</h1>
                <ProductCard title="Pedrisco" />         
            </div>
    )
}