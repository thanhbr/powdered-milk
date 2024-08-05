import BannerPage from "./@banner/page";
import CategoryPage from "./@category/page";
import MilkForBabyPage from "./@milkForBaby/page";


export default async function Home() {
  return (
    <main className="container">
      <div className="mt-4 grid grid-cols-4 gap-4">
        <CategoryPage />
        <BannerPage />
      </div>
      <div>
        <MilkForBabyPage />
      </div>
    </main>
  );
}
