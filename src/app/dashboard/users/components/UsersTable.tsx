"use client"

// ** Store
import { useGetUsersQuery } from "@/store/features/users/UsersService"

// ** UI
import { columns } from "@/ui/users/table/columns"
import { DataTable } from "@/ui/users/table/data-table"

const UsersTable = () => {
  const {data:getAllUsers} = useGetUsersQuery()

  return (
    <div>
        <DataTable columns={columns} data={ getAllUsers || []} />
    </div>
  )
}

export default UsersTable