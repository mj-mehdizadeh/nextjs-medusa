import { CheckoutFormValues } from "@lib/context/checkout-context"
import { emailRegex } from "@lib/util/regex"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import { useMeCustomer } from "medusa-react"
import AddressSelect from "../address-select"
import CountrySelect from "../country-select"

const ShippingAddress = () => {
  const { customer } = useMeCustomer()
  return (
    <div>
      {customer && (customer.shipping_addresses?.length || 0) > 0 && (
        <div className="mb-6 flex flex-col gap-y-4 bg-amber-100 p-4">
          <p className="text-small-regular">
            {`آیا میخواهید از آدرس های ثبت شده استفاده کنید؟`}
          </p>
          <AddressSelect addresses={customer.shipping_addresses} />
        </div>
      )}
      <ConnectForm<CheckoutFormValues>>
        {({ register, formState: { errors, touchedFields } }) => (
          <div className="grid grid-cols-1 gap-y-2">
            <Input
              label="آدرس ایمیل"
              {...register("email", {
                required: "آدرس ایمیل الزامیست",
                pattern: emailRegex,
              })}
              autoComplete="email"
              errors={errors}
              touched={touchedFields}
            />
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="نام"
                {...register("shipping_address.first_name", {
                  required: "نام الزامیست",
                })}
                autoComplete="given-name"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="نام خانوادگی"
                {...register("shipping_address.last_name", {
                  required: "نام خانوادگی الزامیست",
                })}
                autoComplete="family-name"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            <Input
              label="شرکت"
              {...register("shipping_address.company")}
              autoComplete="organization"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="آدرس, خیابان, کوچه,..."
              {...register("shipping_address.address_1", {
                required: "آدرس الزامیست",
              })}
              autoComplete="address-line1"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="پلاک, واحد, ..."
              {...register("shipping_address.address_2")}
              autoComplete="address-line2"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="استان"
              {...register("shipping_address.province")}
              autoComplete="address-level1"
              errors={errors}
              touched={touchedFields}
            />
            <div className="grid grid-cols-[1fr_122px] gap-x-2">
              <Input
                label="شهر"
                {...register("shipping_address.city", {
                  required: "شهر الزامیست",
                })}
                autoComplete="address-level2"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="کد پستی"
                {...register("shipping_address.postal_code", {
                  required: "کد پستی الزامیست",
                })}
                autoComplete="postal-code"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            <Input
              label="شماره تماس"
              {...register("shipping_address.phone")}
              autoComplete="tel"
              errors={errors}
              touched={touchedFields}
            />
          </div>
        )}
      </ConnectForm>
    </div>
  )
}

export default ShippingAddress
