import { Link } from 'react-router-dom'

export const recipeList = [
  {
    id: 1,
    name: 'pasta',
    description: 'pasta desc',
  },
  {
    id: 2,
    name: 'pizza',
    description: 'pizza desc',
  },
  {
    id: 3,
    name: 'curry',
    description: 'curry desc',
  },
] as const

const Recipe = () => {
  return (
    <>
      <ul>
        {recipeList.map((recipe) => (
          <li>
            <Link to={`/recipe/${recipe.id}`}>
              {recipe.id}:{recipe.name}
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

export default Recipe
