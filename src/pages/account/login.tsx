import LoginTemplate from "@modules/account/templates/login-template"
import Head from "@modules/common/components/head"

const Login = () => {
  return (
    <>
      <Head title="ورود به حساب کاربری" description="به حساب کاربری خود وارد شوید" />
      <LoginTemplate />
    </>
  )
}

export default Login
