import { Link, useParams } from 'react-router-dom'
import { CATEGORIES } from '../../../../constants'

export const products = [
  {
    id: 1,
    name: 'Product A',
    category: 'category-a',
  },
  {
    id: 2,
    name: 'Product B',
    category: 'category-a',
  },
  {
    id: 3,
    name: 'Product C',
    category: 'category-a',
  },
  {
    id: 4,
    name: 'Product D',
    category: 'category-b',
  },
  {
    id: 2,
    name: 'Product E',
    category: 'category-b',
  },
  {
    id: 6,
    name: 'Product F',
    category: 'category-b',
  },
  {
    id: 7,
    name: 'Product G',
    category: 'category-c',
  },
  {
    id: 8,
    name: 'Product H',
    category: 'category-c',
  },
  {
    id: 9,
    name: 'Product I',
    category: 'category-c',
  },
] as const

const CategoryProducts = () => {
  const { categorySlug } = useParams()
  if (!categorySlug) {
    throw new Error('category slug is missing')
  }

  return (
    <div className="space-y-3 w-1/2">
      {CATEGORIES.map((category) => {
        if (category.value === categorySlug) {
          return (
            <div key={category.id}>
              <p className="p-2 border">{category.Label}</p>
              <ul className="space-y-3 p-2">
                {products.map((product) => {
                  if (category.value === product.category) {
                    return (
                      <li key={product.id}>
                        <Link to={`/shopping/${category.value}/products/${product.id}`} className="hover:text-sky-300">
                          {product.id} : {product.name}
                        </Link>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          )
        }
      })}
      <Link to={`/shopping`} className="text-sky-500">
        Back to category list
      </Link>
    </div>
  )
}

export default CategoryProducts
