import { FormEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

import login from '@/actions/login'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

const Login = () => {
  const { toast } = useToast()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const email = emailRef?.current?.value
    const password = passwordRef?.current?.value

    if (!email || !password) {
      setError('Both email and password are required')
      setIsSubmitting(false)
      return
    }

    try {
      const user = await login({ email, password })
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        navigate('/')
        toast({
          title: `Welcome back, ${user.firstName}!`,
        })
      }
    } catch (err) {
      console.error(err)
      setError('No user found with that email and password')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="bg-cover flex justify-center items-center w-full h-screen"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559511260-66a654ae982a)' }}
    >
      <form
        onSubmit={onSubmit}
        className="space-y-10 w-full max-w-md bg-card/50 backdrop-blur-lg border p-10 rounded-lg"
      >
        <h1 className="text-3xl">Welcome back to Twootr!</h1>
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
        {error && <div className="text-destructive">{error}</div>}
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
