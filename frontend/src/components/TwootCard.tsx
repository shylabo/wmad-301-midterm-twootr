import { AiOutlineRetweet } from 'react-icons/ai'

import { Twoot } from '../types'
import { PiBookmarkSimpleBold, PiHeartBold } from 'react-icons/pi'

interface CardProps {
  twoot: Twoot
}

const Card: React.FC<CardProps> = ({ twoot }) => {
  return (
    <div className="flex items-start gap-x-3 w-full px-4 py-3 border-b-[1px] border-slate-100">
      <img src={twoot.user.avatarUrl} className="w-10 rounded-full object-contain" alt="user avatar" />
      <div className="space-y-1 w-[calc(100%-60px)]">
        <div className="flex items-center gap-x-2">
          <h2 className="text-sm font-semibold">{twoot.author}</h2>
          <p className="text-slate-700 text-xs">
            @{twoot.authorSlug} • {twoot.dateAdded}
          </p>
        </div>
        <p className="text-sm break-words">{twoot.content}</p>
        {/* Actions */}
        <div className="flex items-center justify-end gap-5 pt-2">
          <div className="text-slate-500">
            <AiOutlineRetweet />
          </div>
          <div className="text-slate-500">
            <PiHeartBold />
          </div>
          <div className="text-slate-500">
            <PiBookmarkSimpleBold />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
