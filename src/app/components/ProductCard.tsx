import { ReactElement } from "react"


const ProductCard: React.FC<ProductProp> = (product): ReactElement => {
    return (
      <div key={product.id} className="group relative">
        <img
          src={product.image}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
              </a>
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">{product.price}</p>
        </div>
      </div>
    )
  }

export default ProductCard;