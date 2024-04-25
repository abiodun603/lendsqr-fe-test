import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@/config/auth-config'

//types

export const usersApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getUsers: builder.query<User, void>({
        query: () => ({
          url: `/6df7b905-5d27-4aec-877e-733a4efab778`,
          method: 'GET',
        }),
      }),
  })
})

export const { useGetUsersQuery } = usersApi