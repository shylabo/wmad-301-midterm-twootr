import { Link, useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'

interface TabMenuProps {
  userSlug: string
}
const TabMenu: React.FC<TabMenuProps> = ({ userSlug }) => {
  const location = useLocation()
  const pathname = location.pathname

  const menu = [
    {
      value: 'posts',
      label: 'Posts',
      path: '/',
    },
    {
      value: 'likes',
      label: 'Likes',
      path: '/likes',
    },
    {
      value: 'retwoots',
      label: 'Retwoots',
      path: '/retwoots',
    },
  ] as const

  return (
    <nav className="flex items-center border-b-[1px] border-slate-100">
      {menu.map((item) => {
        const itemPath = `/${userSlug}${item.path}`
        const isActive = itemPath === pathname
        return (
          <Button variant="ghost" className="h-full rounded-none" asChild>
            <Link to={itemPath} className={`${isActive && 'border-b-2 border-red-500'}`}>
              {item.label}
            </Link>
          </Button>
        )
      })}
    </nav>
  )
}

export default TabMenu
