import Image from "next/image";

export default function BannerTop() {
  return (
    <>
      <Image
        src="/images/banner-top.png"
        alt="Sữa thùng top"
        width={1200}
        height={70}
        className="w-full h-auto"
        priority
      />
    </>
  )
}
