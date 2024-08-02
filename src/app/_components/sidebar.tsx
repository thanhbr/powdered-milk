"use client";

import Image from "next/image";
import Link from "next/link";
import { SidebarRouters } from "./sidebarRouters";

export function Sidebar(): JSX.Element {
  return (
    <div className="h-full w-full flex justify-between overflow-y-auto bg-white">
      <div className="p-2">
        <Link href="/milk" className="flex center gap-2">
          <Image src="/icons/logo.svg" alt="logo" width={30} height={40} />
          {/* <Image src="/icons/logo-name.svg" alt="logo-name" width={70} height={70} /> */}
        </Link>
      </div>
      <div className="flex justify-end w-full">
        <SidebarRouters />
      </div>
    </div>
  );
}
