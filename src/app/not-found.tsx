import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-8 flex flex-col gap-4">
      <div className="text-center">
        <h1 className="mb-5 text-2xl font-bold leading-normal text-bolder sm:text-3xl">
          Xin lỗi! Chúng tôi không tìm thấy trang mà bạn cần!
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/images/404.png"
          alt="404 page"
          width={400}
          height={400}
          className="w-auto h-auto"
          priority
        />
      </div>
      <div className="text-center">
        <Link href="/" className="text-xl font-bold">
          Trở về trang chủ
        </Link>
      </div>
    </div>
  );
}
