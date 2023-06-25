import Button from "@modules/common/components/button"
import Link from "next/link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-start justify-between">
      <div>
        <h2 className="text-xl-semi">حساب کاربری دارید؟</h2>
        <p className="text-base-regular text-gray-700 mt-2">
          پیشنهاد میشود برای بهره مندی از امکانات بیشتر فروشگاه به سیستم وارد شوید.
        </p>
      </div>
      <div>
        <Link href="/account/login">
          <a>
            <Button variant="secondary">ورود به حساب کاربری</Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
