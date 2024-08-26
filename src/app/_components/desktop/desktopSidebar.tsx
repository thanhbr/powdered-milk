import BannerTop from "./bannerTop";
import { Sidebar } from "./sidebar";

const DesktopSidebar = () => {
  return (
    <>
      <BannerTop />
      <div className="sticky top-0 w-full z-[9999] p-4 flex items-center bg-white shadow-xl">
        <Sidebar />
      </div>
    </>
  );
};

export default DesktopSidebar;
