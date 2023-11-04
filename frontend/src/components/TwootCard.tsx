import { AiOutlineRetweet } from 'react-icons/ai'
import { PiBookmarkSimpleBold, PiHeartBold } from 'react-icons/pi'

import { Twoot } from '@/types'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from './ui/button'
import { getDaysCountFromDate, parseDateStringToDate } from '@/lib/utils'

interface CardProps {
  twoot: Twoot
}

const Card: React.FC<CardProps> = ({ twoot }) => {
  const formattedDays = (days: number): string => {
    if (days === 0) {
      return 'Today'
    } else if (days === 1) {
      return 'Yesterday'
    } else {
      return `${days} days ago`
    }
  }

  const parsedTwootDate = parseDateStringToDate(twoot.dateAdded)!
  const daysPassed = getDaysCountFromDate(parsedTwootDate)
  const daysLabel = formattedDays(daysPassed)

  return (
    <div className="flex items-start gap-x-3 w-full px-4 py-3 border-b-[1px] border-slate-100">
      <Avatar>
        <AvatarImage src={twoot.user.avatarUrl} alt="user avatar" />
      </Avatar>
      <div className="space-y-1 w-[calc(100%-60px)]">
        <div className="flex items-center gap-x-2">
          <h2 className="text-sm font-semibold">{twoot.author}</h2>
          <p className="text-slate-700 text-xs">
            @{twoot.authorSlug} • {daysLabel}
          </p>
        </div>
        <p className="text-sm break-words">{twoot.content}</p>
        {/* Actions */}
        <div className="flex items-center justify-end gap-1 pt-2">
          <Button variant="ghost" size="icon">
            <AiOutlineRetweet />
          </Button>
          <Button variant="ghost" size="icon">
            <PiHeartBold />
          </Button>
          <Button variant="ghost" size="icon">
            <PiBookmarkSimpleBold />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
