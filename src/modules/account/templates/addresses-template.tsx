import { useAccount } from "@lib/context/account-context"
import AddressBook from "../components/address-book"

const AddressesTemplate = () => {
  const { customer, retrievingCustomer } = useAccount()

  if (retrievingCustomer || !customer) {
    return null
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">آدرس های ارسال</h1>
        <p className="text-base-regular">
          آدرس های خود را مشاهده و به روز کنید، می توانید به تعداد دلخواه خود اضافه کنید
          پسندیدن. با ذخیره آدرس‌هایتان، آنها در هنگام تسویه‌حساب در دسترس قرار می‌گیرند.
        </p>
      </div>
      <AddressBook customer={customer} />
    </div>
  )
}

export default AddressesTemplate
