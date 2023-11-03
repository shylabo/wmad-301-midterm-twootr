import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const user = localStorage.getItem('user')
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  const handleLogout = () => {
    localStorage.clear()
    navigate(0) // refresh
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <br />
      <button onClick={handleLogout} className="bg-red-500 p-2 rounded-md text-white">
        Logout
      </button>
    </div>
  )
}

export default Dashboard
