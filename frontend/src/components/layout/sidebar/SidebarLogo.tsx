import { GiMapleLeaf } from 'react-icons/gi'

import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const SidebarLogo = () => {
  const navigate = useNavigate()
  return (
    <Button variant="ghost" size="icon" onClick={() => navigate('/')} className="h-14 w-14 p-4 cursor-pointer">
      <GiMapleLeaf size={30} className="text-primary" />
    </Button>
  )
}

export default SidebarLogo
