import Image from "next/image";
import { MOBILE_FOOTER_LINK } from "./../../../constants/index";
import Link from "next/link";

export default function MobileFooter() {
  return (
    <footer className="fixed z-[1000] bottom-0 w-[100%] shadow-sm">
      <div className="bg-white flex justify-between text-center center text-[10px]">
        {MOBILE_FOOTER_LINK.map((item) => (
          <Link key={item.id} href={item.href} className="py-2 min-w-[20%]">
            <Image
              src={item.icon}
              alt={item.label}
              width={24}
              height={24}
              className="mx-auto mb-[2px] bg-no-repeat"
            />
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
