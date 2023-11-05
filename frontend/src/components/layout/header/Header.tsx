import { PiArrowLeftBold } from 'react-icons/pi'

import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  label: string
  showBackArrow?: boolean
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const navigate = useNavigate()

  return (
    <div className="sticky top-0 z-50 bg-ghost/80 backdrop-blur-sm p-3">
      <div className="flex items-center gap-2">
        {showBackArrow && (
          <Button variant="ghost" size="icon" type="button" onClick={() => navigate(-1)}>
            <PiArrowLeftBold size={20} className="shrink-0" />
          </Button>
        )}
        <h1 className="text-xl font-semibold">{label}</h1>
      </div>
    </div>
  )
}

export default Header
