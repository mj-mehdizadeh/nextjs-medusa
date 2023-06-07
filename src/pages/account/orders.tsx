import AccountLayout from "@modules/account/templates/account-layout"
import OrdersTemplate from "@modules/account/templates/orders-template"
import Head from "@modules/common/components/head"
import { NextPageWithLayout } from "types/global"

const Orders: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Orders" description="Overview of your previous orders." />
      <OrdersTemplate />
    </>
  )
}

Orders.getLayout = (page) => {
  return (
    <AccountLayout>{page}</AccountLayout>
  )
}

export default Orders
