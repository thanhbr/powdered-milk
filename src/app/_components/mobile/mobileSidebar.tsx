import BannerCarousel from "./bannerCarousel";
import MobileHeader from "./mobileHeader";

const MobileSidebar = () => {
  return (
    <>
      <MobileHeader />
      <div className="mt-[-60px]">
        <section className="bg-theme-mobile bg-no-repeat relative mb-0 px-10 h-fit">
          <BannerCarousel />
        </section>
      </div>
    </>
  );
};

export default MobileSidebar;
