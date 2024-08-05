import { ProductCard } from "@/components/card";
import { API } from "@/constants";


export default async function MilkForBabyPage() {
  async function getData() {
    const res = await fetch(`${API.GET_PRODUCT}?url_keys_v2=sua-cho-be&get_brand_info=true`)

    return res.json()
  }

  const data = await getData();

  return (
    <div className="my-4 bg-white rounded-xl p-4 shadow-2xl">
      <div>
        <p className="font-bold text-3xl">
          Sữa cho bé
        </p>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-4 lg:grid-cols-4">
        {data?.message?.map((product) => <ProductCard key={product._id} {...product} />)}
      </div>
    </div>
  );
}
