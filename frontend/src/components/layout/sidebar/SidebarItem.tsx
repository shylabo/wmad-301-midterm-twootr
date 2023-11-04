import { IconType } from 'react-icons'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

interface SidebarItemProps {
  label: string
  icon: IconType
  href: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon: Icon, href }) => {
  const navigate = useNavigate()

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => navigate(href)}
      className="flex flex-row items-center lg:w-full h-14 w-14"
    >
      <div className="flex items-center gap-x-4 lg:p-4 w-max lg:w-full">
        <Icon size={24} color={'#d80621'} className="shrink-0" />
        <p className="hidden lg:block text-xl">{label}</p>
      </div>
    </Button>
  )
}

export default SidebarItem
