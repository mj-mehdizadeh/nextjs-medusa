import CartTemplate from "@modules/cart/templates"
import Head from "@modules/common/components/head"

const Cart = () => {
  return (
    <>
      <Head title="Shopping Bag" description="View your shopping bag" />
      <CartTemplate />
    </>
  )
}
export default Cart
