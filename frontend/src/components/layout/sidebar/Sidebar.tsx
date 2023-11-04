import { useNavigate } from 'react-router-dom'
import { PiBookmarkSimpleBold, PiHouseBold, PiSignOutBold, PiUserBold } from 'react-icons/pi'

import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'
import { Button } from '@/components/ui/button'

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
    <div className="fixed h-full px-2 md:px-4">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-between h-screen lg:w-[230px] py-2">
          <div className="space-y-2">
            <SidebarLogo />
            {items.map((item) => (
              <SidebarItem key={item.href} icon={item.icon} href={item.href} label={item.label} />
            ))}
          </div>

          <Button
            size="icon"
            variant="secondary"
            className="w-14 lg:w-full gap-3 text-md rounded-full h-14 "
            onClick={handleLogout}
          >
            <div className="flex items-center justify-center gap-x-4 lg:p-4 w-max lg:w-full">
              <PiSignOutBold size={24} className="shrink-0" />
              <p className="hidden lg:block text-md">Logout</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
