import { ReactElement } from "react"
import CategoryCard from "./CategoryCard"

const CategoriesList = ( {categories} : CategoryWithPicList): ReactElement => {
    return (
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {categories.map((category: CategoryWithPic) => (
          <CategoryCard key={category.category} {...category} />
        ))}
      </div>
    ) 
  }

export default CategoriesList