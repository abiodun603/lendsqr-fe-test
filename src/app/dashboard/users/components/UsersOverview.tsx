"use client"

// ** Libs
import { USERS_DATA } from '@/lib/dummy'

// ** UI
import UsersCard from '@/ui/users/users-card'

const UsersOverview = () => {
  return (
    <div className='flex flex-row gap-x-10'>
      {
        USERS_DATA.map((data) => (
          <UsersCard  key={data.name} name={data.name} count={data.count} image={data.image} />
        ))
      }
    </div>
  )
}

export default UsersOverview