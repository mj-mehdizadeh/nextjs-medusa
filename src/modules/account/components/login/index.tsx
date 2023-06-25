import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import Link from "next/link"

interface SignInCredentials extends FieldValues {
  email: string
  password: string
}

const Login = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (_e: Error) => {
    setAuthError("آدرس ایمیل یا رمز ورود نامعتبر است")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.auth
      .authenticate(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm w-full flex flex-col items-center">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner size={24} />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6">خوش آمدید</h1>
      <p className="text-center text-base-regular text-gray-700 mb-8">
        برای امکان تجربه خرید بهتر، به حساب به کاربری خود وارد شوید.
      </p>
      <form className="w-full" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="آدرس ایمیل"
            {...register("email", { required: "آدرس ایمیل الزامیست" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="رمز ورود"
            {...register("password", { required: "رمز ورود الزامیست" })}
            type="password"
            autoComplete="current-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              اطلاعات حساب کاربری نامعتبر است
            </span>
          </div>
        )}
        <Button className="mt-6">ورود به حساب کاربری</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        حساب کاربری نداردی؟{" "}
        <Link
          href={"/account/register"}
          className="underline"
        >
          ثبت نام کنید
        </Link>
        .
      </span>
    </div>
  )
}

export default Login
