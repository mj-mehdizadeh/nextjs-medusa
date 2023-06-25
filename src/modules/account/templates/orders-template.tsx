import OrderOverview from "../components/order-overview"

const OrdersTemplate = () => {
  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">تاریخچه سفارشات</h1>
        <p className="text-base-regular">
          سفارشات قبلی و وضعیت آنها را مشاهده کنید. شما همچنین می توانید در صورت نیاز سفارشات راتعویض یا درخواست مرجوعی ثبت کنید.
        </p>
      </div>
      <div>
        <OrderOverview />
      </div>
    </div>
  )
}

export default OrdersTemplate
