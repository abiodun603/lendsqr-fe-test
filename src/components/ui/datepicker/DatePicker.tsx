import React, { useState, useEffect } from "react";
import { useFormContext, Controller, FieldValues } from "react-hook-form";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  name: string;
  label?: string;
  onChange?: (value: Date | null) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({ name,label, onChange }) => {
  const { control } = useFormContext<FieldValues>();
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    control.register(name); // register input with useForm
  }, [control, name]);

  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (onChange) {
      onChange(selectedDate ?? null); // Pass selected date value to onChange prop
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field }) => (
        <div className="form-field space-y-1">
          <label htmlFor={name} className="">{label}</label>
          <Popover >
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full h-12 justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0 z-[1000] bg-white"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={(selectedDate: Date | undefined) => {
                  handleDateChange(selectedDate);
                  field.onChange(selectedDate ?? null); 
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
       
      )}
    />
  );
};
