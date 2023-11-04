import { FormEvent, useRef, useState } from 'react'
import { Twoot, User } from '../types'
import createTwoot from '../actions/createTwoot'

interface TwootInputProps {
  user: User
  onSubmitCallback: (newTwoot: Twoot) => Promise<void>
}

const TwootInput: React.FC<TwootInputProps> = ({ user, onSubmitCallback }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const contentRef = useRef<HTMLTextAreaElement | null>(null)

  const maxTwootTextLength = 140

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)

    if (!contentRef?.current?.value) {
      throw new Error("Content doesn't exists")
    }

    const payload = {
      authorSlug: user.slug,
      content: contentRef?.current?.value,
    }

    try {
      const newTwoot = await createTwoot(payload)

      contentRef.current.value = ''
      setCharCount(0)

      await onSubmitCallback(newTwoot)
    } catch (err) {
      console.log(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInput = () => {
    if (contentRef.current) {
      setCharCount(contentRef.current.value.length)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="p-3 border-b border-slate-100 space-y-3">
        <div className="flex items-center gap-5">
          <img src={user.avatarUrl} className="w-10 rounded-full object-contain" alt="user avatar" />
          <textarea
            className="w-full resize-none placeholder:text-xl border-b-[1px] border-slate-100"
            placeholder="What is happening?"
            maxLength={maxTwootTextLength}
            ref={contentRef}
            disabled={isSubmitting}
            onInput={handleInput}
            required
          />
        </div>
        <div className="flex items-center justify-end gap-x-3">
          <div className={`${charCount === maxTwootTextLength ? 'text-red-500' : 'text-slate-500'}`}>
            {charCount}/{maxTwootTextLength}
          </div>
          <button type="submit" className="px-4 py-1.5 rounded-full bg-sky-500 text-white" disabled={isSubmitting}>
            Post
          </button>
        </div>
      </div>
    </form>
  )
}

export default TwootInput
