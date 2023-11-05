import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Sidebar from './sidebar/Sidebar'
import MobileMenu from './footer/MobileMenu'

const BaseLayout = () => {
  const user = localStorage.getItem('user')
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <div className="h-screen w-screen">
      <div className="grid grid-cols-12 h-full w-full">
        <div className="hidden sm:block sm:col-span-1 lg:col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-12 sm:col-span-11 lg:col-span-6 border-x border-border">
          <Outlet />
          <div className="sm:hidden">
            <MobileMenu />
          </div>
        </div>
        <div className="hidden lg:block col-span-3" />
      </div>
    </div>
  )
}

export default BaseLayout
