import { useNavigate } from 'react-router-dom'
import { PiBookmarkSimpleBold, PiHouseBold, PiUserBold } from 'react-icons/pi'

import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'

const items = [
  {
    icon: PiHouseBold,
    label: 'Home',
    href: '/',
  },
  {
    icon: PiBookmarkSimpleBold,
    label: 'Bookmarks',
    href: '/bookmarks',
  },
  {
    icon: PiUserBold,
    label: 'Profile',
    href: '/profile',
  },
]

const Sidebar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate(0) // refresh
  }

  return (
    <div className="fixed h-full px-4 md:px-6">
      <div className="flex flex-col items-center">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem key={item.href} icon={item.icon} href={item.href} label={item.label} />
          ))}

          <button onClick={handleLogout} className="bg-red-500 p-2 rounded-md text-white w-full">
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
