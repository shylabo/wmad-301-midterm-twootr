import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Sidebar from './sidebar/Sidebar'

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
        <div className="col-span-2 lg:col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-10 lg:col-span-6 border-x-[1px] border-slate-100">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default BaseLayout