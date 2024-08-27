"use client";
import useScrollPosition from "@/hooks/useScrollPosition";
import { BellRingIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MobileHeader = () => {
  const xHeight = useScrollPosition();

  return (
    <header id="header" className={`${xHeight > 56 && "bg-white shadow-md"}`}>
      <div className="flex align-center justify-between items-center gap-4">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={30} height={40} priority />
        </Link>
        <form className="w-full">
          <input
            className="w-full pr-9 h-9 border text-sm rounded-full bg-search-icon bg-no-repeat bg-right-top-8 p-2 shadow-sm placeholder:italic"
            type="text"
            placeholder="Ba mẹ cần tìm gì?"
          />
        </form>
        <BellRingIcon />
      </div>
    </header>
  );
};

export default MobileHeader;
