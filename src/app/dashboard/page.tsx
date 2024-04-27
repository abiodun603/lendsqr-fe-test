'use client'

import React from 'react'

// ** hook
import  { useAuthDataCookie } from '@/hooks/useAuthData'

const Dashboard = () => {
  const authdata = useAuthDataCookie()
  return (
    <div className='text-2xl text-b200 font-medium'>Welcome {authdata?.email}</div>
  )
}

export default Dashboard