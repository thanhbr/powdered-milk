"use client";
import { API, HEADERS_API, NAV_LINK } from "@/constants";
import { FAKE_INTERESTED_PRODUCTS } from "@/constants/fakeData/interestedProducts";
import useSwr from "@/hooks/useSwr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const { data } = useSwr({
    url: API.GET_PRODUCT,
    params: { min: 0, max: 10000000 },
  });
  console.log("GET_PRODUCT", data);

  async function getCharacters() {
    let results = await fetch(`https://api-ecommerce.kidsplaza.io/graphql`, {
      method: 'POST',

      headers: HEADERS_API,

      body: JSON.stringify({
        operationName: "InterestedProducts",
        query: FAKE_INTERESTED_PRODUCTS,
        variables: {},
      })
    })
    let products = await results.json();
    console.log("Interested Products", products.data)
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div>
      {NAV_LINK.map((link) => {
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
