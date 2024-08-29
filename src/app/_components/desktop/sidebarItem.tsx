import { cn } from "@/utils/cn";
import { LucideIcon } from "lucide-react";
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
        isActive && "text-body bg-teal-200/20 hover:bg-teal-200/20 hover:text-teal-500 rounded-md",
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon size="28" className={cn("text-slate-500")} />
        <p className="text-xl text-body font-bold">{label}</p>
      </div>
    </button>
  );
}
