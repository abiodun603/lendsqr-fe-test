// ** Layout
import AuthLayout from "@/layouts/auth/auth-layout"

// ** Components
import Button from "@/components/ui/button"


const AuthForm = () => {
  return (
    <AuthLayout>
        <div className='px-40'>
            {/*  */}
            <h1 className='text-b900 text-[40px] font-bold'>Welcome!</h1>
            {/*  */}
            <p className='text-n500 text-[20px] font-normal leading-8'>Enter details to login.</p>

            <Button className="bg-primary w-full">LOG IN</Button>
        </div>
    </AuthLayout>
  )
}

export default AuthForm