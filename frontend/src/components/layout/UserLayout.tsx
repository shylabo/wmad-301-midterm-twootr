import { Outlet, useNavigate } from 'react-router-dom'
import { PiCalendarBlankBold, PiLinkSimpleBold, PiMapPinBold } from 'react-icons/pi'

import { useUser } from '@/hooks/useUser'
import Header from './header/Header'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import TabMenu from '../organisms/user/TabMenu'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { monthNames } from '@/constants/Date'
import { FormEvent, useEffect, useState } from 'react'

const getJoinedDateLabel = (joinedDate: string): string => {
  const date = new Date(joinedDate)

  const month = monthNames[date.getMonth()]
  const formattedDate = `Joined ${month} ${date.getFullYear()}`

  return formattedDate
}

const UserLayout: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    avatarUrl: '',
    firstName: '',
    lastName: '',
    location: '',
    website: '',
  })
  const navigate = useNavigate()

  const { user } = useUser()

  useEffect(() => {
    const fetchUser = async () => {
      if (user) {
        setFormData({
          avatarUrl: user.avatarUrl,
          firstName: user.firstName,
          lastName: user.lastName,
          location: user.location ?? '',
          website: user.website ?? '',
        })
      }
    }
    fetchUser()
  }, [])

  if (!user) {
    return null
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const updatedUser = {
        ...user,
        ...formData, // Override currentUser values
      }

      localStorage.setItem('user', JSON.stringify(updatedUser))
      navigate(0)
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const joinDateLabel = getJoinedDateLabel(user.joinedDate)

  return (
    <>
      <Header label={`${user.firstName} ${user.lastName}`} showBackArrow />
      <div className="relative bg-secondary h-40 w-full">
        <Avatar className="absolute -bottom-16 left-4 w-32 h-32 border-4 border-white bg-secondary">
          <AvatarImage src={user.avatarUrl} alt="user avatar" />
        </Avatar>
      </div>
      <div className="flex justify-end items-center h-16 w-full px-6">
        <Dialog>
          <Button variant="outline" className="rounded-full" asChild>
            <DialogTrigger>Edit profile</DialogTrigger>
          </Button>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
            </DialogHeader>
            <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
              {/* AvatarUrl */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="avatarUrl" className="text-right">
                  Avatar url
                </Label>
                <Input
                  id="avatarUrl"
                  name="avatarUrl"
                  value={formData.avatarUrl}
                  onChange={handleInputChange}
                  className="col-span-3"
                  disabled={isSubmitting}
                  required
                />
              </div>
              {/* FirstName */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="firstName" className="text-right">
                  First name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="col-span-3"
                  disabled={isSubmitting}
                  required
                />
              </div>
              {/* LastName */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lastName" className="text-right">
                  Last name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="col-span-3"
                  disabled={isSubmitting}
                  required
                />
              </div>
              {/* Website */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="website" className="text-right">
                  Website
                </Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="col-span-3"
                  disabled={isSubmitting}
                />
              </div>
              {/* Location */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="location" className="text-right">
                  Location
                </Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="col-span-3"
                  disabled={isSubmitting}
                />
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isSubmitting}>
                  Save changes
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="p-4 space-y-5">
        <div>
          <p className="text-lg font-bold">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-sm text-muted-foreground">@{user.slug}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm">
          {user.location && (
            <p className="flex items-center gap-x-1">
              <PiMapPinBold />
              {user.location}
            </p>
          )}
          {user.website && (
            <p className="flex items-center gap-x-1">
              <PiLinkSimpleBold />
              <a href={user.website} target="_blank" className="text-blue-500 hover:underline">
                {user.website}
              </a>
            </p>
          )}
          <p className="flex items-center gap-x-1">
            <PiCalendarBlankBold />
            {joinDateLabel}
          </p>
        </div>
      </div>
      <TabMenu userSlug={user.slug} />
      <Outlet />
    </>
  )
}

export default UserLayout
