import { Column } from "@tanstack/react-table"

// ** Utils
import { cn } from "@/lib/utils"


// ** Icons
import { ListFilter } from "lucide-react"

// ** Third Party
import { FormProvider, useForm } from "react-hook-form"

// ** Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { CustomInputField, CustomReactSelectField } from "@/components/ui/inputs/custom-input"
import { DatePicker } from "@/components/ui/datepicker/DatePicker"
  
interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

const options = [
  { value: 'pending', label: 'Pending' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'blacklisted', label: 'Blacklisted' },
];

const organization = [
  { value: 'lendsqr', label: 'Lendsqr' },
  { value: 'apple', label: 'Apple' },
  { value: 'microsoft', label: 'Microsoft' },
];

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {

  const methods = useForm();
  const {control} = methods
  

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
        <DropdownMenuContent align="start" className="py-8 px-4 w-[270px]">
        <FormProvider {...methods} >
          <form noValidate autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)}>
            <CustomReactSelectField
              options={organization}
              label="Organization"
              name="organization"
              control={control}    
            />
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
            <CustomReactSelectField
              options={options}
              label="Status"
              name="flavor"
              control={control}    
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
           <div className="grid grid-cols-2 gap-x-4">
              <Button variant="outline" className="border-n500">Cancel</Button>
              <Button className="bg-primary">Filter</Button>
           </div>
          </form>
        </FormProvider>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
