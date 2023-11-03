import { Route, Routes } from 'react-router-dom'

import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Layout from './components/layout/Layout'
import Products from './components/pages/products/Products'
import Services from './components/pages/services/Services'
import Contact from './components/pages/contact/Contact'
import Recipe from './components/pages/recipe/Recipe'
import RecipeSingle from './components/pages/recipe/[recipeId]/RecipeSingle'
import SignUp from './components/pages/signup/SignUp'
import Secret from './components/pages/secret/Secret'
import Login from './components/pages/login/Login'
import Dashboard from './components/pages/dashboard/Dashboard'
import Categories from './components/pages/shopping/categories/Categories'
import CategoryProducts from './components/pages/shopping/products/Products'
import ProductSingle from './components/pages/shopping/products/[productId]/ProductSingle'

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
