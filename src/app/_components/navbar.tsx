"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import MobileSidebar from "./mobile/mobileSidebar";
import DesktopSidebar from "./desktop/desktopSidebar";

export default function Navbar() {
  const isMobile = useIsMobile();
  return <div id="nav-bar">{isMobile ? <MobileSidebar /> : <DesktopSidebar />}</div>;
}
