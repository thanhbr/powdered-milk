import { Suspense } from "react";
import { ProductCard } from "@/components/card";
import { API } from "@/constants";

async function getData() {
  const res = await fetch(
    `${API.GET_PRODUCT}?url_keys_v2=sua-bot-cac-loai&get_brand_info=true&per_page=100`,
  );

  return res.json();
}

export default async function MilkPage() {
  const data = await getData();

  return (
    <Suspense fallback="null">
      <div className="container">
        <p className="text-sky-600 font-bold text-2xl">Sữa cho bé</p>
        <div className="mt-5 grid grid-cols-3 gap-4 lg:grid-cols-5">
          {data?.message?.map((product) => <ProductCard key={product._id} {...product} />)}
        </div>
      </div>
    </Suspense>
  );
}
