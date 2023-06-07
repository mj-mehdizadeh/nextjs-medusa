import { useAccount } from "@lib/context/account-context"
import Register from "@modules/account/components/register"
import { useRouter } from "next/router"
import { useEffect } from "react"

const RegisterTemplate = () => {
  const { customer, retrievingCustomer } = useAccount()

  const router = useRouter()

  useEffect(() => {
    if (!retrievingCustomer && customer) {
      router.push("/account")
    }
  }, [customer, retrievingCustomer, router])

  return (
    <div className="w-full flex justify-center py-24">
      <Register />
    </div>
  )
}

export default RegisterTemplate
