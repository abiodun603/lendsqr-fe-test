import React from 'react'

// ** UI
import UsersCard from '@/ui/users/users-card'

// ** Components
import UserOverview from './components/UserOverview'


const User = () => {
  return (
    <div>
      {/* users data overview */}
      <div className='space-y-6'>
        <h2 className='text-2xl text-b200 font-medium'>Users</h2>
        <UserOverview />
      </div>
    </div>
  )
}

export default User