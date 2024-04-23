"use client"

// ** Libs
import { USERS_OVERVIEW } from '@/lib/dummy'

// ** UI
import UsersCard from '@/ui/users/users-card'

const UsersOverview = () => {
  return (
    <div className='flex flex-row gap-x-10'>
      {
        USERS_OVERVIEW.map((data) => (
          <UsersCard  key={data.name} name={data.name} count={data.count} image={data.image} />
        ))
      }
    </div>
  )
}

export default UsersOverview