const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(): Promise<ProductProp[]> {
    const res = await fetch(`${BASE_URL}/products`, { next: { revalidate: 60 } });
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}


export async function fetchProductById(id: number): Promise<ProductProp> {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch product with id ${id}`);
    }
    return res.json();
}

export async function fetchCategories(): Promise<string[]> {
    const res = await fetch(`${BASE_URL}/products/categories`, { next: { revalidate: 60 } });
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}

export async function fetchProductsByCategory(category: string): Promise<ProductProp[]> {
    const res = await fetch(`${BASE_URL}/products/category/${category}`, { next: { revalidate: 60 } });
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}
