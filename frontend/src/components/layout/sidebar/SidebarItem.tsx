import { IconType } from 'react-icons'
import { useNavigate } from 'react-router-dom'

interface SidebarItemProps {
  label: string
  icon: IconType
  href: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon: Icon, href }) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(href)} className="flex flex-row items-center">
      {/* mobile & laptop */}
      <div
        className="
        flex items-center justify-center lg:hidden h-14 w-14 p-4 rounded-full
        hover:bg-slate-500 hover:bg-opacity-10 transition cursor-pointer
      "
      >
        <Icon size={28} color={'#d80621'} />
      </div>
      {/* desktop */}
      <div
        className="
        hidden lg:flex items-row items-center gap-4 p-4 rounded-full
        hover:bg-slate-500 hover:bg-opacity-10 cursor-pointer
      "
      >
        <Icon size={24} color={'#d80621'} />
        <p className="hidden lg:block text-slate-700 text-xl">{label}</p>
      </div>
    </div>
  )
}

export default SidebarItem
