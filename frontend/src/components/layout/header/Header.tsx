import { useCallback } from 'react'
import { PiArrowLeftBold } from 'react-icons/pi'

interface HeaderProps {
  label: string
  showBackArrow?: boolean
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const handleBack = useCallback(() => {}, [])
  return (
    <div className="sticky top-0 bg-white/80 backdrop-blur-sm p-3">
      <div className="flex items-center gap-2">
        {showBackArrow && (
          <PiArrowLeftBold
            onClick={handleBack}
            size={20}
            className="shrink-0 cursor-pointer hover:opacity-70 transition"
          />
        )}
        <h1 className="text-xl font-semibold">{label}</h1>
      </div>
    </div>
  )
}

export default Header
