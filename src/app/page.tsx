import { PRODUCT_LIST } from "@/constants/productTree";
import BannerPage from "./@banner/page";
import CategoryPage from "./@category/page";
import ProductListPage from "./@productList/page";

export default async function Home() {
  return (
    <main className="container">
      <div className="mt-4 grid grid-cols-4 gap-4">
        <CategoryPage />
        <BannerPage />
      </div>
      <div>
        {PRODUCT_LIST.map((item) => (
          <ProductListPage key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}
