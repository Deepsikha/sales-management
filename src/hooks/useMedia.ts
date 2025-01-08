"use client"
import { useMediaQuery } from "react-responsive";

const useMedia = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useMedia;
