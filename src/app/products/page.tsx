import { fetchProducts } from "../services/api";
import ProductsList from "./components/ProductsList";

export default async function ProductsPage() {
    try {
        const products = await fetchProducts(); 
        return (
            <div>
            <h1 className="text-2xl font-bold mb-4 text-black">Каталог товаров</h1>
            <ProductsList products={products}/>
            </div>
        );
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return <div>Ошибка при загрузке товаров</div>;
    }
}