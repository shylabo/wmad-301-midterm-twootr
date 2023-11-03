import { Link, useParams } from 'react-router-dom'
import { products } from '../Products'

const ProductSingle = () => {
  const { productId } = useParams()
  if (!productId) {
    throw new Error('product id is missing')
  }

  const product = products.find((product) => product.id === +productId)
  if (!product) {
    throw new Error('Product not found')
  }
  return (
    <div>
      <p>id: {product.id}</p>
      <p>name: {product.name}</p>
      <p>category: {product.category}</p>

      <br />
      <Link to={`/shopping/${product.category}`} className="text-sky-500">
        Back to product list
      </Link>
    </div>
  )
}

export default ProductSingle
