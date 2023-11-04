import { FormEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import login from '@/actions/login'

const Login = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)

    const email = emailRef?.current?.value
    const password = passwordRef?.current?.value

    if (!email || !password) {
      throw new Error('Both email and password are required')
    }

    try {
      const user = await login({ email, password })
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        navigate('/')
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 place-items-center">
      <p>Welcome back!</p>
      <br />
      <form onSubmit={onSubmit} className="space-y-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">email</label>
          <input id="email" type="email" className="border" disabled={isSubmitting} ref={emailRef} required />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">password</label>
          <input id="password" type="password" className="border" disabled={isSubmitting} ref={passwordRef} required />
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
