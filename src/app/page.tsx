import { API } from "@/constants";
import { ArrowRight } from "lucide-react";


async function getData() {
  const res = await fetch(API.GET_MENU_CATEGORY)
  if(res.status !== 200) return;
  return res.json()
}

export default async function Home() {
  const data = await getData();
  const categories = data.message;

  return (
    <main className="bg-container-md">
      <p className="text-2xl font-bold">
        Danh mục
      </p>
      {categories.map(category => (
        <div key={category._id}>
          <div className="flex gap-1">
            <p className="text-md">{category.name}</p>
            {category.child.length > 0
              && (
                <ArrowRight />
              )}
          </div>
        </div>
      ))}
    </main>
  );
}
