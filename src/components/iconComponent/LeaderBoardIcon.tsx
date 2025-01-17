import React from "react";

import { IconProps } from "@/utils/iconTypes";

const LeaderBoard: React.FC<IconProps> = ({
  className = "",
  fill = "currentColor",
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 19"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.5 3.23047C5.5 1.98783 6.50736 0.980469 7.75 0.980469H10.25C11.4926 0.980469 12.5 1.98783 12.5 3.23047V5.00047H15.75C16.9926 5.00047 18 6.00782 18 7.25047V18.2505C18 18.6647 17.6642 19.0005 17.25 19.0005H0.75C0.33579 19.0005 0 18.6647 0 18.2505V10.2505C0 9.0078 1.00736 8.0005 2.25 8.0005H5.5V3.23047ZM7 17.5005H11V3.23047C11 2.81626 10.6642 2.48047 10.25 2.48047H7.75C7.3358 2.48047 7 2.81625 7 3.23047V17.5005ZM5.5 9.5005H2.25C1.83579 9.5005 1.5 9.8363 1.5 10.2505V17.5005H5.5V9.5005ZM12.5 17.5005H16.5V7.25047C16.5 6.83625 16.1642 6.50047 15.75 6.50047H12.5V17.5005Z"
        fill={fill}
      />
    </svg>
  );
};

export default LeaderBoard;
