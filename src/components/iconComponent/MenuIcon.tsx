import React from "react";

import { IconProps } from "@/utils/iconTypes";

const MenuIcon: React.FC<IconProps> = ({
  className = "",
  fill = "currentColor",
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M6 7H18V9H6V7Z"  />
      <path d="M6 11H18V13H6V11Z"  />
      <path d="M18 15H6V17H18V15Z"  />
    </svg>
  );
};

export default MenuIcon;
