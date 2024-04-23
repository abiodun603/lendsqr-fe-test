"use client"

// ** Libs
import { users_data } from '@/lib/dummy'

// ** UI
import UsersCard from '@/ui/users/users-card'

const UserOverview = () => {
  return (
    <div className='flex flex-row gap-x-10'>
        {
            users_data.map((data) => (
                <UsersCard  key={data.name} name={data.name} count={data.count} image={data.image} />
            ))
        }
    </div>
  )
}

export default UserOverview