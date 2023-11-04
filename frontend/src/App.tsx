import { Route, Routes } from 'react-router-dom'

import Layout from '@/components/layout/Layout'
import Home from '@/pages/home/Home'
import Recipe from '@/pages/recipe/Recipe'
import RecipeSingle from '@/pages/recipe/[recipeId]/RecipeSingle'
import Login from '@/pages/login/Login'
import NotFound from '@/pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {/* Auth */}
        <Route path="login" element={<Login />} />

        <Route path="recipe" element={<Recipe />} />
        <Route path="recipe/:recipeId" element={<RecipeSingle />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
