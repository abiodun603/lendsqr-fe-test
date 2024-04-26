'use client'

import  { FC, useEffect, useState } from 'react'

// ** Store
import { useGetUsersQuery } from "@/store/features/users/UsersService"

// ** Third Party
import { Rating as ReactRating } from '@smastrom/react-rating'

// ** Components
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabsContentOne from './TabsContentOne'
import { User } from '@/types'



interface UserViewDetailsProps {
  user_id: number;
}

const UserViewDetails: FC<UserViewDetailsProps> = ({ user_id }) => {
  const [rating, setRating] = useState(0)
  const [user, setUser] = useState<User | undefined>();

  const {data:getAllUsers, isLoading} = useGetUsersQuery()

  if (isLoading) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    if (getAllUsers) {
      const filteredUser = getAllUsers.find(user => user.id === user_id);
      if (filteredUser) {
        setUser(filteredUser);
      } else {
        console.log(`User with ID ${user_id} not found.`);
      }
    }
  }, [getAllUsers, user_id]);


  console.log(user, user_id)

  return (
    <Tabs defaultValue="details" className="w-full">      
      {/* user header action */}
      <div className='w-full flex items-center justify-between'>
        <h3 className='text-b200 text-2xl font-medium'>User Details</h3>
        <div className='flex items-center space-x-3'>
          <Button variant={"outline"} className='text-sm text-r500 font-semibold uppercase border-r500'>blacklist user</Button>
          <Button variant={"outline"} className='text-sm text-primary font-semibold uppercase border-primary'>activate user</Button>
        </div>
      </div>

      {/* user details tab panel */}
      <div className='mt-10 w-full'>
        <div className='relative w-full h-[210px] border border-[#213f7d0f] drop-shadow-sm rounded-[4px] bg-white p-6'>
          {/*  */}
          <div className='p-6'>
            <div className="flex h-7 items-center space-x-4 text-sm">
              <div className='flex items-center space-x-3'>
                <div>
                  <Avatar className="w-[100px] h-[100px]">
                    <AvatarImage src="https://github.com/shadcn.png"  />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                {/* name */}
                <div className='space-y-1 flex flex-col'>
                  <h2 className='text-[22px] text-n500 font-medium'>Grace Effiom</h2>
                  <p className='text-sm text-n500 font-normal'>LSQFf587g90</p>
                </div>
              </div>
              <Separator orientation="vertical" className='bg-n500 h-[80px]' />
              <div>
                <p className='text-sm text-n500 font-medium'>User’s Tier</p>
                <ReactRating style={{ maxWidth: 100 }} value={rating} onChange={setRating} />
              </div>
              <Separator orientation="vertical" className='bg-n500 h-[80px]'/>
              <div className='space-y-1'>
                <p className='text-[22px] text-b200 font-medium space-y-1'>₦200,000.00</p>
                <p className='text-xs text-b200 font-normal'>9912345678/Providus Bank</p>
              </div>
            </div>
          </div>
          
          {/*tab header */}
          <div className='absolute  bottom-0'>
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="details">General Details</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="bank">Bank Details</TabsTrigger>
              <TabsTrigger value="loans">Loans</TabsTrigger>
              <TabsTrigger value="savings">Savings</TabsTrigger>
              <TabsTrigger value="apps">App and System</TabsTrigger>
            </TabsList>
          </div>
        </div>
      </div>
      <div className='border border-[#213f7d0f] drop-shadow-sm rounded-[4px] bg-white px-6 pt-6 pb-10 w-full h-full mt-10'>
        <TabsContent value="details">
          <TabsContentOne user={user}/>
        </TabsContent>
        <TabsContent value="documents">USER DOCUMENTS HERE.</TabsContent>
        <TabsContent value="bank">BANK DETAILS HERE.</TabsContent>
        <TabsContent value="loans">LOAN VIEW HERE.</TabsContent>
        <TabsContent value="savings">SAVINGS DETAILS HERE</TabsContent>
        <TabsContent value="apps">APP AND SYSTEM DETAILS HERE</TabsContent>
      </div>
    </Tabs>
  )
}

export default UserViewDetails