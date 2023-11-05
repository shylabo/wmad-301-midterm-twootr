import { Route, Routes } from 'react-router-dom'

import BaseLayout from '@/components/layout/BaseLayout'
import UserLayout from './components/layout/UserLayout'
import { Toaster } from '@/components/ui/toaster'
import Home from '@/components/pages/home/Home'
import Login from '@/components/pages/login/Login'
import NotFound from '@/components/pages/NotFound'
import Twoot from '@/components/pages/twoot/Twoot'
import Bookmarks from '@/components/pages/bookmarks/Bookmarks'
import Posts from '@/components/pages/user/Posts'
import Likes from './components/pages/user/Likes'
import Retwoots from './components/pages/user/Retwoots'

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        {/* Auth */}
        <Route path="login" element={<Login />} />

        {/* App */}
        <Route element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="twoots/:twootId" element={<Twoot />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path=":userSlug" element={<UserLayout />}>
            <Route index element={<Posts />} />
            <Route path="likes" element={<Likes />} />
            <Route path="retwoots" element={<Retwoots />} />
          </Route>
        </Route>

        {/* Error */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
