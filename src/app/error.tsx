'use client' // Error components must be Client Components

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="mt-8 flex flex-col gap-4">
      <div className="text-center">
        <h1 className="mb-5 text-2xl font-bold leading-normal text-bolder sm:text-3xl">
          Xin lỗi! Có gì đó đã lỗi!
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={"/images/404.png"}
          alt="404 page"
          width={400}
          height={400}
          className="w-auto h-auto"
        />
      </div>
      <div className="text-center">
        <button onClick={ () => reset() } className="text-xl font-bold">
          Thử lại
        </button>
      </div>
      <div className="text-center">
        <Link href="/" className="text-xl font-bold">
          Trở về trang chủ
        </Link>
      </div>
    </div>
  )
}
