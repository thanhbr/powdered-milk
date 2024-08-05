import BannerPage from "./@banner/page";
import CategoryPage from "./@category/page";


export default async function Home() {
  return (
    <main className="container">
      <div className="mt-2 grid grid-cols-4 gap-4">
        <CategoryPage />
        <BannerPage />
      </div>
    </main>
  );
}
