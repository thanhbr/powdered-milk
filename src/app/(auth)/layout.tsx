"use client";
import { API, API_GRAPHQL_URL, HEADERS_API, NAV_LINK } from "@/constants";
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

      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "IdLDYTgb2tzJnAU8XR8a6CwnQFPeVx71TbIuBUv5",
        "App-Cache-Id": "51dbf2026a9b3943984cb8589f6dacf03a562bce14c95484b98f043620cb8b16"
      },


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
