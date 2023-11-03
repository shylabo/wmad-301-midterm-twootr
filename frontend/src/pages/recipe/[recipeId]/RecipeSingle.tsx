import { Link, useParams } from 'react-router-dom'
import { recipeList } from '../Recipe'

const RecipeSingle = () => {
  const { recipeId } = useParams()
  if (!recipeId) {
    throw new Error('RecipeId is missing')
  }

  const recipe = recipeList.find((recipe) => recipe.id === +recipeId)
  if (!recipe) {
    throw new Error('Recipe not found')
  }

  return (
    <>
      <div className="border w-max p-3 space-y-4">
        <p>Recipe id: {recipe?.id}</p>
        <p>Recipe name: {recipe?.name}</p>
        <p>Recipe description: {recipe?.description}</p>
      </div>
      <br />
      <Link to="/recipe" className="text-sky-500">
        Back to recipe
      </Link>
    </>
  )
}

export default RecipeSingle
