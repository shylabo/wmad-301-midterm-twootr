import { Route, Routes } from 'react-router-dom'

import Layout from '@/components/layout/Layout'
import { Toaster } from '@/components/ui/toaster'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import NotFound from '@/pages/NotFound'
import TwootPage from '@/pages/twoot/Twoot'

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {/* Auth */}
          <Route path="login" element={<Login />} />

          <Route path="twoots/:twootId" element={<TwootPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
