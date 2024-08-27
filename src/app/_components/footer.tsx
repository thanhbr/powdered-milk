"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import MobileFooter from "./mobile/mobileFooter";
import DesktopFooter from "./desktop/desktopFooter";

export default function Footer() {
  const isMobile = useIsMobile();
  return <>{isMobile ? <MobileFooter /> : <DesktopFooter />}</>;
}
