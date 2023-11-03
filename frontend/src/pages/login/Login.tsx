import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      localStorage.setItem('user', 'sample username')
      navigate('/dashboard')
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <div className="grid grid-cols-1 place-items-center">
      <p>Welcome back!</p>
      <br />
      <form onSubmit={onSubmit} className="space-y-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">email</label>
          <input id="email" type="email" className="border" disabled={isSubmitting} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">password</label>
          <input id="password" type="password" className="border" disabled={isSubmitting} />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-sky-500 text-white p-2 rounded-md" disabled={isSubmitting}>
            Login
          </button>
        </div>
        {isSubmitting && <p>Submitting...</p>}
      </form>
    </div>
  )
}

export default Login
