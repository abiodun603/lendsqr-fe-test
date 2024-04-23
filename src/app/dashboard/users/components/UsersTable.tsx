"use client"

// ** UI
import { USERS_DATA } from "@/lib/dummy"
import { columns } from "@/ui/users/table/columns"
import { DataTable } from "@/ui/users/table/data-table"

const UsersTable = () => {
  return (
    <div>
        <DataTable columns={columns} data={USERS_DATA} />
    </div>
  )
}

export default UsersTable