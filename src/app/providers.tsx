'use client'

import {ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

// ** Hooks
import { useAuthDataCookie } from "@/hooks/useAuthData";

// ** Store
import { Provider } from 'react-redux'
import store from '@/store'


const Providers = ({children}: { children: ReactNode }) => {
  const authData = useAuthDataCookie()

  const router = useRouter()
  const pathname = usePathname()
  useEffect(() => {
    if(authData?.isLoggedIn && pathname == "/"){
      router.push("/dashboard")
    }

  }, [authData?.isLoggedIn, pathname])
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Providers