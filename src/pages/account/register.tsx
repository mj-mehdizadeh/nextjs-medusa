import Head from "@modules/common/components/head"
import RegisterTemplate from "@modules/account/templates/register-template"

const Register = () => {
  return (
    <>
      <Head title="ثبت نام" description="ایجاد حساب کاربری جدید" />
      <RegisterTemplate />
    </>
  )
}

export default Register
