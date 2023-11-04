import { FormEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

import login from '@/actions/login'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

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
    <div className="flex justify-center w-full pt-20">
      <form onSubmit={onSubmit} className="space-y-10 w-full max-w-sm">
        <h1 className="text-3xl">Welcome back!</h1>
        <div className="space-y-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">email</Label>
            <Input
              id="email"
              type="email"
              placeholder="twoot@example.com"
              disabled={isSubmitting}
              ref={emailRef}
              autoFocus
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Your password"
              disabled={isSubmitting}
              ref={passwordRef}
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting} className="w-20">
            {isSubmitting ? <ClipLoader color="#fff" size={16} aria-label="Loading Spinner" /> : 'Login'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Login
