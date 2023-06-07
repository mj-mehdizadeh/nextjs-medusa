import LoginTemplate from "@modules/account/templates/login-template"
import Head from "@modules/common/components/head"

const Login = () => {
  return (
    <>
      <Head title="Sign in" description="Sign in to your ACME account." />
      <LoginTemplate />
    </>
  )
}

export default Login
