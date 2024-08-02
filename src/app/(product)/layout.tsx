"use client";

import { ProductCard } from "@/components/card";
import { API } from "@/constants";
import useSwr from "@/hooks/useSwr";

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useSwr({
    url: API.GET_PRODUCT,
    params: { min: 0, max: 10000000, per_page: 100, url_key_v2: "sua-cho-be", get_brand_info: true },
  });
  console.log("GET_PRODUCT", data);

  if (isLoading) return <div>Loading.......</div>;

  return (
    <div className="">
      {children}
      <div className="mt-5 grid grid-cols-3 gap-5 lg:grid-cols-5">
        {data?.message?.map((product) => <ProductCard key={product._id} {...product} />)}
      </div>
    </div>
  );
}
