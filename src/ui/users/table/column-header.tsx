  import { Column } from "@tanstack/react-table"
  
  import { cn } from "@/lib/utils"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

// ** Icons
import { ListFilter } from "lucide-react"

// ** Third Party
import { FormProvider, useForm } from "react-hook-form"

// ** Components
import { Button } from "@/components/ui/button"
import { CustomInputField } from "@/components/ui/inputs/custom-input"
import { DatePicker } from "@/components/ui/datepicker/DatePicker"
  
  interface DataTableColumnHeaderProps<TData, TValue>
    extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>
    title: string
  }
  
  export function DataTableColumnHeader<TData, TValue>({
    column,
    title,
    className,
  }: DataTableColumnHeaderProps<TData, TValue>) {

    const methods = useForm();

    if (!column.getCanSort()) {
      return <div className={cn(className)}>{title}</div>
    }

    const onSubmit = () => {
    }
  
  
    return (
      <div className={cn("flex items-center space-x-2", className)}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="-ml-3 h-8 data-[state=open]:bg-accent"
            >
                <span>{title}</span>
                <ListFilter className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[270px]">
          <FormProvider {...methods} >
            <form className="mt-8 px-2" noValidate autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)}>
              <CustomInputField
                label="Username"
                type="text"
                name='username'
                placeholder="User"
              />
              <CustomInputField
                label="Email"
                type="email"
                name='email'
                placeholder="Email"
              />
              <DatePicker
                name="date"  
                label="Date"
              />
              <CustomInputField
                label="Phone Number"
                type="tel"
                name='phone'
                placeholder="phone"
              />
            </form>
          </FormProvider>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }
  