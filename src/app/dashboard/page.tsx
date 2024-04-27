'use client'

import React from 'react'

// ** hook
import useGlobalState from '@/hooks/global.hook'
import useLocalStorageEmail from '@/hooks/useLocalStorageEmail'

const Dashboard = () => {
  const {email} = useLocalStorageEmail()
  return (
    <div>Welcome {email}</div>
  )
}

export default Dashboard