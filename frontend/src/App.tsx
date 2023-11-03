import { Route, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Products from './pages/products/Products'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'
import Recipe from './pages/recipe/Recipe'
import RecipeSingle from './pages/recipe/[recipeId]/RecipeSingle'
import SignUp from './pages/signup/SignUp'
import Secret from './pages/secret/Secret'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import Categories from './pages/shopping/categories/Categories'
import CategoryProducts from './pages/shopping/products/Products'
import ProductSingle from './pages/shopping/products/[productId]/ProductSingle'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />

        <Route path="recipe" element={<Recipe />} />
        <Route path="recipe/:recipeId" element={<RecipeSingle />} />

        <Route path="signup" element={<SignUp />} />
        <Route path="secret" element={<Secret />} />

        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="shopping" element={<Categories />} />
        <Route path="shopping/:categorySlug" element={<CategoryProducts />} />
        <Route path="shopping/:categorySlug/products/:productId" element={<ProductSingle />} />
      </Route>
    </Routes>
  )
}

export default App
