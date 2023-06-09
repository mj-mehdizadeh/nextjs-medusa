import { useAccount } from "@lib/context/account-context"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Login from "../components/login"

const LoginTemplate = () => {
  const {  customer, retrievingCustomer } = useAccount()

  const router = useRouter()

  useEffect(() => {
    if (!retrievingCustomer && customer) {
      router.push("/account")
    }
  }, [customer, retrievingCustomer, router])

  return (
    <div className="w-full flex justify-center py-24">
      <Login />
    </div>
  )
}

export default LoginTemplate
