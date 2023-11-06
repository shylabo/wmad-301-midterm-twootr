import { Button } from '@/components/ui/button'
import { useUser } from '@/hooks/useUser'
import { PiBookmarkSimpleBold, PiHouseBold, PiSignOutBold, PiUserBold } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

const MobileMenu = () => {
  const navigate = useNavigate()

  const { user } = useUser()
  if (!user) return

  const items = [
    {
      icon: PiHouseBold,
      label: 'Home',
      onClick: () => navigate('/'),
    },
    {
      icon: PiBookmarkSimpleBold,
      label: 'Bookmarks',
      onClick: () => navigate('/bookmarks'),
    },
    {
      icon: PiUserBold,
      label: 'Profile',
      onClick: () => navigate(`/${user.slug}`),
    },
    {
      icon: PiSignOutBold,
      label: 'Logout',
      onClick: () => handleLogout(),
    },
  ]

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }
  return (
    <div className="fixed z-50 flex bottom-0 w-full bg-card border-t border-border">
      {items.map(({ icon: Icon, label, onClick }) => (
        <Button key={label} variant="ghost" onClick={onClick} className="w-full p-6 rounded-none">
          <Icon size={24} className="text-secondary-foreground" />
        </Button>
      ))}
    </div>
  )
}

export default MobileMenu
