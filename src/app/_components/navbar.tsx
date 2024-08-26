"use client"
import { useIsMobile } from "@/hooks/useIsMobile";
import BannerTop from "./bannerTop";
import MobileSidebar from "./mobileSidebar";
import { Sidebar } from "./sidebar";

export default function Navbar() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <>
          <h1>Navbar Mobile</h1>
        </>
      ) : (
        <>
          <BannerTop />
          <div className="sticky top-0 w-full z-[9999] p-4 flex items-center bg-teal-600 shadow-xl">
            <Sidebar />
          </div>
        </>
      )}
    </>
  );
}
