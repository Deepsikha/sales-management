"use client";
import Image from "next/image";

import useMedia from "@/hooks/useMedia";

import MobileLogo from "../../public/MobileLogo.png";

import AngleDown from "./iconComponent/AngleDownIcon";
import NotificationIcon from "./iconComponent/NotificationIcon";
import MenuIcon from "./iconComponent/MenuIcon";

type DashboardHeaderProps = {
  toggleSidebar: () => void;
  isOpen: boolean;
};

export default function DashboardHeader(props: DashboardHeaderProps) {
  const { toggleSidebar, isOpen } = props;
  const { isMobile } = useMedia();

  return (
    <div className="p-2 sm:py-4 sm:px-6 flex items-center justify-between md:border-none border-b border-[#00D0EB]">
      {isMobile && (
        <div
          className={`${
            isOpen
              ? "opacity-0 visibility-hidden"
              : "opacity-100 visibility-visible"
          } transition-opacity duration-500 ease-in-out`}
        >
          <Image src={MobileLogo} alt={"logo"} priority />
        </div>
      )}
      <div className="hidden md:flex items-center justify-end gap-16 ml-auto">
        <button className="bg-[#00D0EB] rounded-[10px] text-base py-3 px-6 hover:text-white">
          Create
        </button>
        <div className="flex items-center gap-3">
          <NotificationIcon width="15" height="18" fill="none" />
          <div className=" flex items-center gap-3 ">
            <span className="w-[30px] h-[30] min-w-[30px] rounded-full">
              <Image width={29} height={29} src="/Profile.png" alt="user" />
            </span>
            <AngleDown width={12} height={9} />
          </div>
        </div>
      </div>
      {isMobile && (
        <div onClick={toggleSidebar}>
          <MenuIcon fill="#00D0EB" height={36} width={36} />
        </div>
      )}
    </div>
  );
}
