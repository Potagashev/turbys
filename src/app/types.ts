
interface Rating {
    rate: number
    count: number
}
  
interface ProductProp {
    id: number;
    title: string;
    price: number;  
    description: string
    category: string
    image: string
    rating: Rating
}

interface ProductsListProp {
    products: ProductProp[]
}

interface CategoryWithPic {
    category: string
    image: string
}

interface CategoryWithPicList {
    categories: CategoryWithPic[]
}