

// utils/isMobile.js
export function isMobileDevice() {
  if (typeof navigator === "undefined") return false;

  return /Android|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent
  );
}
