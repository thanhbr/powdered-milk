import { API } from "@/constants";
import { AlignCenterIcon } from "lucide-react";

async function getData() {
  const res = await fetch(API.GET_MENU_CATEGORY)
  if(res.status !== 200) return;
  return res.json()
}

export default async function CategoryPage() {
  const data = await getData();
  const categories = data.message;

  return (
    <div className="flex flex-col gap-4 bg-white p-2 rounded-md shadow-xl">
      <div className="flex gap-4 items-center">
        <AlignCenterIcon />
        <h1 className="text-2xl font-bold">
          Danh mục
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        {categories.map(category => (
          <div key={category._id}>
            <div className="flex gap-1 cursor-pointer">
              <p className="text-md">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
