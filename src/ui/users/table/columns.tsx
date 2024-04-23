"use client"

import Link from 'next/link'

import { ColumnDef } from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// ** Icon
import { CgMoreVertical } from "react-icons/cg";

// ** Component
import Button  from "@/components/ui/button";


// This type is used to define the shape of our data.
export type UserDataTable = {
  id?: number;
  organization: string
  username: string
  email: string
  phone?:string;
  date?:string;
  status?:string;
}

export const columns: ColumnDef<UserDataTable>[] = [
  {
    id: "organization",
    header: "Organization",
    cell: ({ row }) => {
      const userData = row.original
      const organization: string = userData?.organization || ""

      return <div>
        <p className='text-n500 text-sm font-normal'>{organization}</p>
      </div>
    },
  },
  {
    accessorKey: "username",
    header: "Username",
      cell: ({ row }) => {
        const userData = row.original
        const username: string = userData?.username || ""

        return <div>
          <p className='text-n500 text-sm font-normal'>{username}</p>
        </div>
      },
    },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const userData = row.original
      const email: string = userData?.email || ""

      return <div>
        <p className='text-n500 text-sm font-normal'>{email}</p>
      </div>
    },
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
    cell: ({ row }) => {
      const phone: string = row.getValue("phone")
 
      return <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center body-three text-n900  capitalize">{phone || "---"}</div>
      </div>
    },
  },
  {
    accessorKey: "date",
    header: "Date Joined",
    cell: ({ row }) => {
      const date: string  = row.getValue("date")
 
      return <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center body-three text-n900 capitalize">{date || "---"}</div>
      </div>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status : string  = row.getValue("status")
 
      return <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center body-three text-n900 capitalize">{status || "---"}</div>
      </div>
    },
  },
  {
    id: "actions",
    header: () => <div className="">
      <Button variant="ghost" className="h-8 w-8 p-0">
        {/* <span className="sr-only">Open menu</span>
        <CgMoreVertical className="h-4 w-4  text-xl text-n700"  size={60}/> */}
      </Button>
    </div>,
    cell: ({ row }) => {
      const employee = row.original 

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <CgMoreVertical className="h-4 w-4 text-2xl"  size={80} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={`/dashboard/employees/details/${employee?.id}`}>
              <DropdownMenuItem >Edit</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
