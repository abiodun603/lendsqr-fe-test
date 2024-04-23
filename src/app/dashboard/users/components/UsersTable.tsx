"use client"

import { columns } from "@/ui/users/table/columns"
import { DataTable } from "@/ui/users/table/data-table"

const UsersTable = () => {
  return (
    <div>
        <DataTable columns={columns} data={[]} />
    </div>
  )
}

export default UsersTable