import { usePathname } from "next/navigation";
import BannerTop from "./bannerTop";
import { Sidebar } from "./sidebar";

const DesktopSidebar = () => {
  const pathname = usePathname();
  const showBannerTop = pathname === "/";

  return (
    <>
      {showBannerTop && <BannerTop />}
      <div className="sticky top-0 w-full z-[9999] p-4 flex items-center bg-white shadow-xl">
        <Sidebar />
      </div>
    </>
  );
};

export default DesktopSidebar;
