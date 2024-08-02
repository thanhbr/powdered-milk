"use client";

import { cn } from "@/utils/cn";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export function SidebarItem({ icon: Icon, label, href }: SidebarItemProps): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") || pathname === href || pathname?.startsWith(`${href}/`);

  const onClick = () => router.push(href);

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex flex-col items-end gap-x-2 text-slate-500 text-sm font-[500] px-4 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700",
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon size="28" className={cn("text-slate-500 text-sky-700", isActive && "text-sky-700")} />
        <p className="text-xl font-bold">{label}</p>
      </div>
    </button>
  );
}
