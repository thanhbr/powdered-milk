"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLink = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      {navLink.map((link) => {
        const isActive = pathname?.startsWith(link.href);
        return (
          <Link
            key={link.name}
            href={link.href}
            style={isActive ? { color: "blue" } : { color: "green" }}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
