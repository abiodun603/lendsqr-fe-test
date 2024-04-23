'use client'

// ** Layout
import AuthLayout from "@/layouts/auth/auth-layout"

// ** Third Party
import { FormProvider, useForm } from "react-hook-form"

// ** Components
import Button from "@/components/ui/button"
import { CustomInputField } from "@/components/ui/inputs/custom-input"
import Link from "next/link"
import { useRouter } from "next/navigation"


const defaultValues = {
  email: '',
  password: ''
}

const AuthForm = () => {
  const methods = useForm({defaultValues});
  
  const router = useRouter()

  const onSubmit = () => {
    router.push("/dashboard")
  }

  return (
    <AuthLayout>
      <div className='px-40'>
        {/*  */}
        <h1 className='text-b200 text-[40px] font-bold'>Welcome!</h1>
        {/*  */}
        <p className='text-n500 text-[20px] font-normal leading-8'>Enter details to login.</p>
          
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