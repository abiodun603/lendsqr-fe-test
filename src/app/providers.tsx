'use client'

import {ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

// ** Hooks
import { useAuthDataCookie } from "@/hooks/useAuthData";

// ** Store
import { Provider } from 'react-redux'
import store from '@/store'


const Providers = ({children}: { children: ReactNode }) => {
  const authData = useAuthDataCookie()

  const router = useRouter()

  useEffect(() => {
    if(authData?.isLoggedIn){
      router.push("/dashboard")
    }

  }, [authData?.isLoggedIn])
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Providers