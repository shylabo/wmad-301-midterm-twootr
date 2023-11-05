import { AiOutlineRetweet } from 'react-icons/ai'
import { PiBookmarkSimpleBold, PiBookmarkSimpleFill, PiHeartBold, PiHeartFill } from 'react-icons/pi'

import { Twoot } from '@/types'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '../../ui/button'
import { getDaysCountFromDate, getFormattedDays, parseDateStringToDate } from '@/lib/utils'
import { useBookmarks } from '@/hooks/useBookmarks'
import { useLikes } from '@/hooks/useLikes'
import { useRetwoots } from '@/hooks/useRetwoots'
import { Skeleton } from '@/components/ui/skeleton'

interface CardProps {
  twoot: Twoot
}

const Card = ({ twoot }: CardProps) => {
  const { isBookmarked, toggleBookmark } = useBookmarks()
  const { isLiked, toggleLike } = useLikes()
  const { isRetwooted, toggleRetwoots } = useRetwoots()

  const parsedTwootDate = parseDateStringToDate(twoot.dateAdded)!
  const daysPassed = getDaysCountFromDate(parsedTwootDate)
  const daysLabel = getFormattedDays(daysPassed)

  const handleBookmark = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, twootId: string) => {
    event.preventDefault()
    toggleBookmark(twootId)
  }

  const handleLike = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, twootId: string) => {
    event.preventDefault()
    toggleLike(twootId)
  }

  const handleRetweet = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, twootId: string) => {
    event.preventDefault()
    toggleRetwoots(twootId)
  }

  return (
    <div className="flex items-start gap-x-3 w-full px-4 py-3 border-b-[1px] border-secondary">
      <Avatar>
        <AvatarImage src={twoot.user.avatarUrl} alt="user avatar" />
      </Avatar>
      <div className="space-y-1 w-[calc(100%-60px)]">
        <div className="flex items-center gap-x-2">
          <h2 className="text-sm font-semibold">{twoot.author}</h2>
          <p className="text-muted-foreground text-xs">
            @{twoot.authorSlug} • {daysLabel}
          </p>
        </div>
        <p className="text-sm break-words">{twoot.content}</p>
        {/* Actions */}
        <div className="flex items-center justify-end gap-1 pt-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="group hover:bg-green-500/20"
            onClick={(e) => handleRetweet(e, twoot._id)}
          >
            {isRetwooted(twoot._id) ? (
              <AiOutlineRetweet className="text-green-500" />
            ) : (
              <AiOutlineRetweet className="group-hover:text-green-500" />
            )}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="group hover:bg-red-500/20"
            onClick={(e) => handleLike(e, twoot._id)}
          >
            {isLiked(twoot._id) ? (
              <PiHeartFill className="text-red-500" />
            ) : (
              <PiHeartBold className="group-hover:text-red-500" />
            )}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="group hover:bg-blue-500/20"
            onClick={(e) => handleBookmark(e, twoot._id)}
          >
            {isBookmarked(twoot._id) ? (
              <PiBookmarkSimpleFill className="text-blue-500" />
            ) : (
              <PiBookmarkSimpleBold className="group-hover:text-blue-500" />
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card

Card.Skeleton = function CardSkeleton() {
  return (
    <div className="flex items-start gap-x-3 w-full px-4 py-3 border-b-[1px] border-secondary">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-1 w-[calc(100%-60px)]">
        <Skeleton className="h-4 w-[50%]" />
        <Skeleton className="h-16 w-full" />
      </div>
    </div>
  )
}
