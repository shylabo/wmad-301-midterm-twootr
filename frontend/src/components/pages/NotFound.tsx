import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center pt-10">
      <div className="flex flex-col items-center gap-y-5">
        <h1>404 | NotFound</h1>
        <Button onClick={() => navigate(-1)}>Go back</Button>
      </div>
    </div>
  )
}

export default NotFound
