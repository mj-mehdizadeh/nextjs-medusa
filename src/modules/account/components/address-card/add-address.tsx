import { medusaClient } from "@lib/config"
import { useAccount } from "@lib/context/account-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import CountrySelect from "@modules/checkout/components/country-select"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Modal from "@modules/common/components/modal"
import Plus from "@modules/common/icons/plus"
import Spinner from "@modules/common/icons/spinner"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

type FormValues = {
  first_name: string
  last_name: string
  city: string
  country_code: string
  postal_code: string
  province?: string
  address_1: string
  address_2?: string
  phone?: string
  company?: string
}

const AddAddress: React.FC = () => {
  const { state, open, close } = useToggleState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const { refetchCustomer } = useAccount()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  const handleClose = () => {
    reset({
      first_name: "",
      last_name: "",
      city: "",
      country_code: "",
      postal_code: "",
      address_1: "",
      address_2: "",
      company: "",
      phone: "",
      province: "",
    })
    close()
  }

  const submit = handleSubmit(async (data: FormValues) => {
    setSubmitting(true)
    setError(undefined)

    const payload = {
      first_name: data.first_name,
      last_name: data.last_name,
      company: data.company || "",
      address_1: data.address_1,
      address_2: data.address_2 || "",
      city: data.city,
      country_code: data.country_code,
      province: data.province || "",
      postal_code: data.postal_code,
      phone: data.phone || "",
      metadata: {},
    }

    medusaClient.customers.addresses
      .addAddress({ address: payload })
      .then(() => {
        setSubmitting(false)
        refetchCustomer()
        handleClose()
      })
      .catch(() => {
        setSubmitting(false)
        setError("Failed to add address, please try again.")
      })
  })

  return (
    <>
      <button
        className="border border-gray-200 p-5 min-h-[220px] h-full w-full flex flex-col justify-between"
        onClick={open}
      >
        <span className="text-base-semi">آدرس جدید</span>
        <Plus size={24} />
      </button>

      <Modal isOpen={state} close={handleClose}>
        <Modal.Title>آدرس جدید</Modal.Title>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-2">
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="نام"
                {...register("first_name", {
                  required: "نام الزامیست",
                })}
                required
                errors={errors}
                autoComplete="given-name"
              />
              <Input
                label="نام خانوادگی"
                {...register("last_name", {
                  required: "نام خانوادگی الزامیست",
                })}
                required
                errors={errors}
                autoComplete="family-name"
              />
            </div>
            <Input label="شرکت" {...register("company")} errors={errors} />
            <Input
              label="آدرس, خیابان, کوچه, ..."
              {...register("address_1", {
                required: "آدرس الزامیست",
              })}
              required
              errors={errors}
              autoComplete="address-line1"
            />
            <Input
              label="پلاک, آپارتمان, واحد, ... "
              {...register("address_2")}
              errors={errors}
              autoComplete="address-line2"
            />
            <Input
              label="استان"
              {...register("province")}
              errors={errors}
              autoComplete="address-level1"
            />
            <div className="grid grid-cols-[1fr_144px] gap-x-2">
              <Input
                label="شهر"
                {...register("city", {
                  required: "شهر الزامیست",
                })}
                errors={errors}
                required
                autoComplete="locality"
              />
              <Input
                label="کد پستی"
                {...register("postal_code", {
                  required: "کد پستی الزامیست",
                })}
                required
                errors={errors}
                autoComplete="postal-code"
              />
            </div>
            <Input
              label="شماره تماس"
              {...register("phone")}
              errors={errors}
              autoComplete="phone"
            />
          </div>
          {error && (
            <div className="text-rose-500 text-small-regular py-2">{error}</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="!bg-gray-200 !text-gray-900 !border-gray-200 min-h-0"
            onClick={handleClose}
          >
            بستن
          </Button>
          <Button className="min-h-0" onClick={submit} disabled={submitting}>
            ذخیره
            {submitting && <Spinner />}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddAddress
