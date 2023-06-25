import Head from "@modules/common/components/head"
import Link from "next/link"

const NotFound = () => {
  return (
    <>
      <Head title="404" description="Something went wrong" />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="text-2xl-semi text-gry-900">صفحه پیدا نشد</h1>
        <p className="text-small-regular text-gray-700">
          صفحه ای که سعی کردید به آن دسترسی پیدا کنید وجود ندارد.
        </p>
        <Link href="/">
          <a className="mt-4 underline text-base-regular text-gray-900">
            صفحه اصلی
          </a>
        </Link>
      </div>
    </>
  )
}

export default NotFound
