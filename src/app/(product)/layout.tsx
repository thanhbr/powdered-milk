"use client";
import ProductCard from "@/components/card/page";
import { API } from "@/constants";
import useSwr from "@/hooks/useSwr";

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useSwr({
    url: API.GET_PRODUCT,
    params: { min: 0, max: 10000000 },
  });
  console.log("GET_PRODUCT", data);

  if (isLoading) return <div>Loading.......</div>;

  const products = data?.message;

  return (
    <>
      {children}

      <div className="mt-5 grid grid-cols-3 gap-5 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product._id}></ProductCard>
        ))}
      </div>
    </>
  );
}
