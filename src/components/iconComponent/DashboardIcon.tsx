import React from "react";

import { IconProps } from "@/utils/iconTypes";

const DashboardIcon: React.FC<IconProps> = ({
  className = "",
  fill = "currentColor",
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 15"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.2974 12.3147V7.67681C13.2974 7.35413 13.2307 7.03485 13.1015 6.73851C12.9722 6.44218 12.783 6.17503 12.5456 5.95344L8.12176 1.82398C7.89896 1.61593 7.60398 1.5 7.29736 1.5C6.99075 1.5 6.69577 1.61593 6.47296 1.82398L2.04916 5.95344C1.8117 6.17503 1.62253 6.44218 1.49326 6.73851C1.36399 7.03485 1.29733 7.35413 1.29736 7.67681V12.3147C1.29736 12.6291 1.42379 12.9306 1.64884 13.1528C1.87388 13.3751 2.1791 13.5 2.49736 13.5H12.0974C12.4156 13.5 12.7208 13.3751 12.9459 13.1528C13.1709 12.9306 13.2974 12.6291 13.2974 12.3147Z"
        fill={fill}
        stroke={fill}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DashboardIcon;
