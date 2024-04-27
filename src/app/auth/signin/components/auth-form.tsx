'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

// ** Layout
import AuthLayout from "@/layouts/auth/auth-layout"

// ** Third Party
import { FormProvider, useForm } from "react-hook-form"

// ** Hooks
import { useAppDispatch } from "@/hooks/useTypedSelector"

// ** Components
import Button from "@/components/ui/custom-button"
import { CustomInputField } from "@/components/ui/inputs/custom-input"

// ** Store
import { login } from "@/store/features/auth/authSlice"

interface FieldValues {
  email: string
  password: string
}
const defaultValues = {
  email: '',
  password: ''
}

const AuthForm = () => {
  const methods = useForm({defaultValues});
  
  const router = useRouter()
  const dispatch = useAppDispatch()

  const onSubmit = (data: FieldValues) => {
    const form_data = {
      email: data?.email
    }
    try {
      dispatch(login(form_data))
      router.push("/dashboard")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthLayout>
      <div className='px-4 md:px-[20%]'>
        <div className="absolute left-0 top-0 translate-y-10 translate-x-10">
          <Image
            src="/logo.svg"
            alt="auth banner"
            width={130}
            height={200}
            className="block md:hidden h-auto mx-auto mb-6"
          />
        </div>
        {/*  */}
        <h1 className='text-center md:text-start text-b200 text-[40px] font-bold'>Welcome!</h1>
        {/*  */}
        <p className='text-center md:text-start text-n500 text-[20px] font-normal leading-8'>Enter details to login.</p>
          
        <FormProvider {...methods} >
          <form className="mt-16" noValidate autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)}>
            <CustomInputField
              type="email"
              name='email'
              placeholder="Email"
              rules={{
                required: 'Email is required',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                }
              }}
            />
    
            <CustomInputField
              name='password'
              placeholder="Password"
              type="Password"
              password
              rules={{
                required: 'Password is required',
              }}
            />

            {/* forget password */}
            <div className="mb-8 mt-5">
              <Link href="/" className="text-xs text-primary font-semibold uppercase mb-8 mt-6">Forget Password</Link>
            </div>

            <Button className="bg-primary w-full">Log In</Button>
          </form>
        </FormProvider> 
      </div>
    </AuthLayout>
  )
}

export default AuthForm