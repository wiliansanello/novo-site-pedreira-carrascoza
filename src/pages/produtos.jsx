import { ProductTitle } from "./components/ProductTitle";
import { ProductCard } from "./components/ProductCard";

export default function Products() {

    return (
        <div className="mx-12">
            <h1 className="pt-28 text-bold text-5xl text-center">Produtos</h1>
            <ProductTitle title="Pedrisco" />
            <ProductCard title="Pedrisco" />
            <ProductCard title="Pedrisco" />
            <ProductCard title="Pedrisco" />
            <ProductCard title="Pedrisco" />
            <ProductCard title="Pedrisco" />
        </div>
    )
}