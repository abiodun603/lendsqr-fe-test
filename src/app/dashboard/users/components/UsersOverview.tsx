"use client"

// ** Libs
import { USERS_OVERVIEW } from '@/lib/dummy'
import { useGetUsersQuery } from '@/store/features/users/UsersService'

// ** UI
import UsersCard from '@/ui/users/users-card'

const UsersOverview = () => {
  const {data:getUsersData, isLoading} = useGetUsersQuery()

  const activeUsersCount = getUsersData?.filter(user => user?.status === "active");
  const pendingUsersCount = getUsersData?.filter(user => user?.status === "pending");
  return (
    <div className='flex flex-row flex-wrap gap-y-10 md:gap-x-10'>
      <UsersCard  key={USERS_OVERVIEW[0].name} name={USERS_OVERVIEW[0].name} count={getUsersData?.length || 0} image={USERS_OVERVIEW[0].image} />
      <UsersCard  key={USERS_OVERVIEW[1].name} name={USERS_OVERVIEW[1].name} count={activeUsersCount?.length || 0} image={USERS_OVERVIEW[1].image} />
      <UsersCard  key={USERS_OVERVIEW[2].name} name={USERS_OVERVIEW[2].name} count={pendingUsersCount?.length || 0} image={USERS_OVERVIEW[2].image} />
      <UsersCard  key={USERS_OVERVIEW[3].name} name={USERS_OVERVIEW[3].name} count={getUsersData?.length || 0} image={USERS_OVERVIEW[3].image} />
    </div>
  )
}

export default UsersOverview