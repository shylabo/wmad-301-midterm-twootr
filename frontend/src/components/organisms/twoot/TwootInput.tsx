import { FormEvent, useRef, useState } from 'react'

import { Twoot, User } from '@/types'
import createTwoot from '@/actions/createTwoot'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { useToast } from '@/components/ui/use-toast'

interface TwootInputProps {
  user: User
  onSubmitCallback: (newTwoot: Twoot) => Promise<void>
}

const TwootInput: React.FC<TwootInputProps> = ({ user, onSubmitCallback }) => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const contentRef = useRef<HTMLTextAreaElement | null>(null)

  if (!user) return

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

      toast({
        title: 'Twoot has been created!',
        description: newTwoot.content,
      })

      await onSubmitCallback(newTwoot)
    } catch (err) {
      console.error(err)
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
      <div className="p-3 border-b border-border space-y-3">
        <div className="flex items-start gap-5">
          <Avatar>
            <AvatarImage src={user.avatarUrl} alt="user avatar" />
          </Avatar>
          <Textarea
            className="w-full resize-none placeholder:text-xl text-xl border-none"
            placeholder="What is happening?"
            maxLength={maxTwootTextLength}
            ref={contentRef}
            disabled={isSubmitting}
            onInput={handleInput}
            required
          />
        </div>
        <div className="flex items-center justify-end gap-x-5">
          <div className={`${charCount === maxTwootTextLength ? 'text-destructive' : 'text-muted-foreground'}`}>
            {charCount}/{maxTwootTextLength}
          </div>
          <Button type="submit" disabled={isSubmitting}>
            Post
          </Button>
        </div>
      </div>
    </form>
  )
}

export default TwootInput
