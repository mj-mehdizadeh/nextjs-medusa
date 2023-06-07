import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { NextPageWithLayout } from "types/global"
import RegisterTemplate from "@modules/account/templates/register-template"

const Register: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Register" description="create new ACME account." />
      <RegisterTemplate />
    </>
  )
}

Register.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Register
