'use client'; // Đảm bảo đây là Client Component

import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Kiểm tra user agent ở phía client
    const userAgent =
      typeof window !== 'undefined' ? navigator.userAgent : '';
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    setIsMobile(mobileRegex.test(userAgent));
  }, []);

  return isMobile;
}
