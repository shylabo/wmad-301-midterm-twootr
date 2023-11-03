import { PiBookmarkSimpleBold, PiHouseBold, PiUserBold } from 'react-icons/pi'

import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
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

  return (
    <div className="fixed h-full px-4 md:px-6">
      <div className="flex flex-col items-center">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem key={item.href} icon={item.icon} href={item.href} label={item.label} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
