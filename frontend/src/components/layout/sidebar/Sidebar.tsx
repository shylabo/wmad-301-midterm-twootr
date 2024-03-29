import { PiBookmarkSimpleBold, PiHouseBold, PiSignOutBold, PiUserBold } from 'react-icons/pi'

import SidebarLogo from './SidebarLogo'
import SidebarItem from './SidebarItem'
import { useUser } from '@/hooks/useUser'
import { ModeToggle } from '@/components/molecules/ModeToggle'

const Sidebar = () => {
  const { user } = useUser()
  if (!user) return

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
      href: `/${user.slug}`,
    },
    {
      icon: PiSignOutBold,
      label: 'Logout',
      href: '/logout',
    },
  ]

  return (
    <div className="fixed h-full px-2 md:px-4">
      <div className="flex flex-col justify-between h-screen lg:w-[230px] pt-2 pb-4">
        <div className="space-y-2">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem key={item.href} icon={item.icon} href={item.href} label={item.label} />
          ))}
        </div>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Sidebar
