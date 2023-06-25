import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("خطایی رخ داده, لطفا دوباره تلاش کنید")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner size={24} />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6">ایجاد حساب کاربری</h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        برای تجربه خرید آنلاین بهتر با ما, یک حساب کاربری ایجاد کنید.
      </p>
      <form className="w-full flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="نام"
            {...register("first_name", { required: "نام الزامیست" })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="نام خانوادگی"
            {...register("last_name", { required: "نام خانوادگی الزامیست" })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="ادرس ایمیل"
            {...register("email", { required: "آدرس ایمیل الزامیست" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="شماره تماس"
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="رمز ورود"
            {...register("password", {
              required: "Password is required",
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              اطلاعات حساب کاربری نامعتبر است.
            </span>
          </div>
        )}
        <span className="text-center text-gray-700 text-small-regular mt-6">
          با ایجاد حساب کاربری با&apos;s{" "}
          <Link href="/content/privacy-policy">
            <a className="underline">سیاست حفظ حریم خصوصی</a>
          </Link>{" "}
          و{" "}
          <Link href="/content/terms-of-use">
            <a className="underline">قوانین و مقررات</a>
          </Link>{" "}موافقت میکنم
          .
        </span>
        <Button className="mt-6">ایجاد حساب کاربری</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        قبلا حساب کاربری ایجاد کرده اید؟{" "}
        <Link
          href={"/account/login"}
          className={"underline"}
        >
          بازگشت به صفحه ورود
        </Link>
        .
      </span>
    </div>
  )
}

export default Register
