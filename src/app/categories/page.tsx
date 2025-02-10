import { fetchCategories, fetchProductsByCategory } from "../services/api";
import CategoriesList from "./components/CategoriesList";

export default async function CategoriesPage() {
    try {
        const categories = await fetchCategories();
        
        let categories_with_pics: CategoryWithPic[] = []
        for (let i = 0; i < categories.length; i++) {
            try {
                const category_product = (await fetchProductsByCategory(categories[i]))[0]
                const category_with_pic = {
                    category: categories[i],
                    image: category_product.image
                }
                categories_with_pics.push(category_with_pic)
            } catch (error) {
                console.error(`ERROR: category '${categories[i]}' was not loaded`)
                continue
            }
        }
        return (
            <div>
            <h1 className="text-2xl font-bold mb-4 text-black">Каталог товаров</h1>
            <CategoriesList categories={categories_with_pics}/>
            </div>
        );
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return <div>Ошибка при загрузке товаров</div>;
    }
} 