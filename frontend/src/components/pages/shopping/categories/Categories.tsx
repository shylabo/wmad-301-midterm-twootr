import { Link } from 'react-router-dom'
import { CATEGORIES } from '../../../../constants'

const Categories = () => {
  return (
    <>
      <ul className="space-y-3">
        {CATEGORIES.map((category) => (
          <li key={category.id}>
            <Link to={category.value} className="hover:text-sky-500">
              {category.id} : {category.Label}
            </Link>
          </li>
        ))}
      </ul>
      <br />
      <Link to={'/'} className="text-sky-500">
        Back to top
      </Link>
    </>
  )
}

export default Categories
