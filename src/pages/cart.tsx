import CartTemplate from "@modules/cart/templates"
import Head from "@modules/common/components/head"

const Cart = () => {
  return (
    <>
      <Head title="ثبت سفارش" description="مشاهده سبد خرید و ثبت سفارش" />
      <CartTemplate />
    </>
  )
}
export default Cart
