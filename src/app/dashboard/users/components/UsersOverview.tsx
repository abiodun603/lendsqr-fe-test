"use client"

// ** Libs
import { USERS_OVERVIEW } from '@/lib/dummy'
import { useGetUsersQuery } from '@/store/features/users/UsersService'

// ** UI
import UsersCard from '@/ui/users/users-card'

const UsersOverview = () => {
  const {data:getUsersData, isLoading} = useGetUsersQuery()

  return (
    <div className='flex flex-row gap-x-10'>
      {
        USERS_OVERVIEW.map((data) => (
          <UsersCard  key={data.name} name={data.name} count={getUsersData?.length || 0} image={data.image} />
        ))
      }
    </div>
  )
}

export default UsersOverview