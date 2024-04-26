import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@/config/auth-config'

// ** Types
import { User, Users } from '@/types'


export const usersApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getUsers: builder.query<Users, void>({
        query: () => ({
          url: `/a4cb974c-709e-43a2-856a-6d395af22807`,
          method: 'GET',
        }),
      }),
  })
})

export const { useGetUsersQuery } = usersApi