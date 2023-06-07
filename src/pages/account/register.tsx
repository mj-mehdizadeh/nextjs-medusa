import Head from "@modules/common/components/head"
import RegisterTemplate from "@modules/account/templates/register-template"

const Register = () => {
  return (
    <>
      <Head title="Register" description="create new ACME account." />
      <RegisterTemplate />
    </>
  )
}

export default Register
