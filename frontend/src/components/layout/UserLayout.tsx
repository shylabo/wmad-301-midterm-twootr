import { Outlet } from 'react-router-dom'

import { useUser } from '@/hooks/useUser'
import Header from './header/Header'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import TabMenu from '../organisms/user/TabMenu'

const UserLayout = () => {
  const { user } = useUser()

  return (
    <>
      <Header label={`${user.firstName} ${user.lastName}`} showBackArrow />
      <div className="relative bg-slate-200 h-40 w-full">
        <Avatar className="absolute -bottom-16 left-4 w-32 h-32 border-4 border-white bg-slate-100">
          <AvatarImage src={user.avatarUrl} alt="user avatar" />
        </Avatar>
      </div>
      <div className="flex justify-end items-center h-16 w-full px-6">
        <Button variant="outline" className="rounded-full">
          Edit profile
        </Button>
      </div>
      <div className="p-4">
        <p className="text-lg font-bold">
          {user.firstName} {user.lastName}
        </p>
        <p className="text-sm text-muted-foreground">@{user.slug}</p>
      </div>
      <TabMenu userSlug={user.slug} />
      <Outlet />
    </>
  )
}

export default UserLayout
