import AccountLayout from "@modules/account/templates/account-layout"
import OverviewTemplate from "@modules/account/templates/overview-template"
import Head from "@modules/common/components/head"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const Account: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Account" description="Overview of your account activity." />
      <OverviewTemplate />
    </>
  )
}

Account.getLayout = (page: ReactElement) => {
  return (
    <AccountLayout>{page}</AccountLayout>
  )
}

export default Account
