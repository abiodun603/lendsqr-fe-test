import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@/config/auth-config'

// ** Types
import { User } from './type'


export const usersApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
        query: () => ({
          url: `/b39c3dde-8e20-4a1f-877d-1c6270bd7bfd`,
          method: 'GET',
        }),
      }),
  })
})

export const { useGetUsersQuery } = usersApi