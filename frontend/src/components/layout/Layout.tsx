import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'

const Layout = () => {
  const user = localStorage.getItem('user')
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <div className="container mx-auto h-screen w-screen">
      <div className="grid grid-cols-12 h-full w-full">
        <div className="col-span-2 lg:col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-10 lg:col-span-6 border-x-[1px] border-slate-100">
          <Header label={'Post'} showBackArrow />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
