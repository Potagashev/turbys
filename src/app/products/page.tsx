import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import { fetchProducts } from "../services/api";

export default async function ProductsPage() {
    const [products, setProducts] = useState<ProductProp[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                setError("Error fetching products");
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Каталог товаров</h1>
      <ProductsList products={products}/>
    </div>
  );
}