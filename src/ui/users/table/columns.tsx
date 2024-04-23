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
import { Eye, UserX, UserRoundCheck  } from 'lucide-react';

// ** Component
import { Badge } from '@/components/ui/badge';
import { DataTableColumnHeader } from './column-header';


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
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Organization" />
    ),
    cell: ({ row }) => {
      const userData = row.original
      const organization: string = userData?.organization || ""

      return <div>
        <p className="table-text capitalize">{organization}</p>
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
          <p className='table-text capitalize'>{username}</p>
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
        <p className='table-text'>{email}</p>
      </div>
    },
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
    cell: ({ row }) => {
      const phone: string = row.getValue("phone")
 
      return <p className="table-text">{phone || "---"}</p>
    },
  },
  {
    accessorKey: "date",
    header: "Date Joined",
    cell: ({ row }) => {
      const date: string  = row.getValue("date")
 
      return <div className="flex items-center space-x-4">
        <div className="table-text">{date || "---"}</div>
      </div>
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status :  "pending" | "active" | "inactive" | null   = row.getValue("status")
 
      return <Badge className='capitalize py-1 px-4' variant={status}>{status}</Badge>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <CgMoreVertical className="h-4 w-4 text-2xl"  size={80} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white space-y-2 pl-6 pr-10 py-4">
            <DropdownMenuItem>
              <div className='flex items-center space-x-2 text-sm capitalize font-semibold'>
                <Eye className='text-n500 text-sm'/>
                <h3 className=''>View Details</h3>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className='flex items-center space-x-2 text-sm capitalize font-semibold'>
                <UserX className='text-n500 text-sm'/>
                <h3 className=''>Blacklist User</h3>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className='flex items-center space-x-2 text-sm capitalize font-semibold'>
                <UserRoundCheck className='text-n500 text-sm'/>
                <h3 className=''>Activate User</h3>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]