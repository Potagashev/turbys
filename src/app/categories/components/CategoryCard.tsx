import { ReactElement } from "react"


const CategoryCard: React.FC<CategoryWithPic> = (category): ReactElement => {
    return (
      <div key={category.category} className="group relative">
        <div className="mt-4 flex justify-between">
            <h3 className="text-sm text-gray-700">
                <a>
                <span aria-hidden="true" className="absolute inset-0" />
                {category.category}
                </a>
            </h3>
        </div>
        <img
          src={category.image}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
      </div>
    )
  }

export default CategoryCard;