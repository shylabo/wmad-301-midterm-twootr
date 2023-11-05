import { Route, Routes } from 'react-router-dom'

import Layout from '@/components/layout/Layout'
import { Toaster } from '@/components/ui/toaster'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import NotFound from '@/pages/NotFound'
import TwootPage from '@/pages/twoot/Twoot'
import Bookmarks from '@/pages/bookmarks/Bookmarks'

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        {/* Auth */}
        <Route path="login" element={<Login />} />

        {/* App */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="twoots/:twootId" element={<TwootPage />} />
          <Route path="bookmarks" element={<Bookmarks />} />
        </Route>

        {/* Error */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
