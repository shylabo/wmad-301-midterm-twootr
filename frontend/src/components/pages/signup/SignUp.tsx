import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      navigate('/secret')
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <div className="grid grid-cols-1 place-items-center">
      <p>Welcome to our website!</p>
      <br />
      <form onSubmit={onSubmit} className="space-y-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">email</label>
          <input id="email" type="email" className="border" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">password</label>
          <input id="password" type="password" className="border" />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-sky-500 text-white p-2 rounded-md">
            Signup
          </button>
        </div>
        {isSubmitting && <p>Submitting...</p>}
      </form>
    </div>
  )
}

export default SignUp
