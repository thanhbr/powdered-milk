"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import MobileSidebar from "./mobile/mobileSidebar";
import DesktopSidebar from "./desktop/desktopSidebar";

export default function Navbar() {
  const isMobile = useIsMobile();
  return <>{isMobile ? <MobileSidebar /> : <DesktopSidebar />}</>;
}
