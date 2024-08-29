import { BellRing, ShoppingBasket } from "lucide-react";
import { SidebarItem } from "./sidebarItem";

const guestRoutes = [
  {
    icon: ShoppingBasket,
    label: "Giỏ hàng",
    href: "/gio-hang.html",
  },
  {
    icon: BellRing,
    label: "Khuyến mãi",
    href: "/khuyen-mai.html",
  },
];

const adminRoutes = [];

export function SidebarRouters(): JSX.Element {
  const routes = guestRoutes;

  return (
    <div className="flex">
      {routes.map((route) => (
        <SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href} />
      ))}
    </div>
  );
}
