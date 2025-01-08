"use client";

import React, { ElementType, JSX, useCallback, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import useMedia from "@/hooks/useMedia";

import Logo from "../../public/logo.png";
import MobileLogo from "../../public/MobileLogo.png";

import DashboardIcon from "./iconComponent/DashboardIcon";
import LeaderBoard from "./iconComponent/LeaderBoardIcon";
import ProfileIcon from "./iconComponent/ProfileIcon";
import ResourceIcon from "./iconComponent/ResourceIcon";
import SignOut from "./iconComponent/SignOutIcon";

type sidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

type menuItemType = {
  name: string;
  path: string;
  icon?: React.ElementType;
  subMenu?: menuItemType[];
};

export default function Sidebar(props: sidebarProps) {
  const { isOpen, toggleSidebar } = props;
  const { isMobile } = useMedia();
  const [active, setActive] = useState("Dashboard");

  const menuItems: menuItemType[] = [
    {
      name: "Dashboard",
      path: "/",
      icon: DashboardIcon,
      subMenu: [
        { name: "Setter", path: "/dashboard/setter" },
        { name: "Sales Rep", path: "/dashboard/sales-rep" },
        { name: "Manager", path: "/dashboard/manager" },
        { name: "Regional", path: "/dashboard/regional" },
        { name: "Partner", path: "/dashboard/partner" },
        { name: "Office", path: "/dashboard/office" },
        { name: "Office Admin", path: "/dashboard/office-admin" },
      ],
    },
    { name: "Leaderboard", path: "/leaderboard", icon: LeaderBoard },
    { name: "Profile", path: "/profile", icon: ProfileIcon },
    { name: "Resources", path: "/resources", icon: ResourceIcon },
    { name: "Signout", path: "/", icon: SignOut },
  ];

  const handleMenuItemClick = useCallback(
    (item: menuItemType) => {
      {
        setActive((prev) => (prev === item.name ? "Dashboard" : item.name));
        toggleSidebar?.();
      }
    },
    [toggleSidebar]
  );

  return (
    <div
      className={`max-w-60 md:min-w-64 md:w-full fixed left-0 border-[#00D0EB] border-r md:border-none bg-black md:relative md:flex flex-col flex-1 h-full transition-all duration-500 ease-in-out ${
        isMobile && !isOpen
          ? "-translate-x-full opacity-0"
          : "translate-x-0 opacity-100 "
      }`}
    >
      <div className="pt-5 p-2 md:p-4 text-2xl font-bold mx-auto">
        <Image className="hidden md:flex" src={Logo} alt={"logo"} priority />
        <Image
          className="flex md:hidden"
          src={MobileLogo}
          alt={"logom"}
          priority
        />
      </div>
      <nav className="flex-1 overflow-auto border-none md:border-r pt-5 sm:pt-10 pl-[23px] pr-3 md:border-[#00D0EB]">
        {menuItems.map((item) => (
          <div key={item.name}>
            <Link
              href={item.path}
              className={`flex items-center font-medium text-[#87888C] gap-2 rounded-md py-2 px-3 hover:bg-[#00D0EB] hover:text-black transition-colors ${
                active === item.name
                  ? "bg-[#00D0EB] !text-[#171821] !font-semibold text-base"
                  : ""
              }`}
              onClick={() => {
                handleMenuItemClick(item);
              }}
            >
              <div
                className={"w-6 h-6 min-w-6 flex items-center justify-center"}
              >
                {item.icon && (
                  <item.icon
                    className={`text-lg ${
                      active === item.name ? "text-black" : "text-white"
                    }`}
                  />
                )}
              </div>
              {item.name}
            </Link>
            {item.subMenu && (
              <div
                className={`ml-8 transition-all duration-500 ease-in-out overflow-hidden ${
                  active === item.name
                    ? "max-h-screen opacity-100 my-2 "
                    : "max-h-0 opacity-0 "
                }`}
              >
                {item.subMenu.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.path}
                    onClick={toggleSidebar}
                    className="block font-medium text-base text-[#87888C] py-2 px-3 hover:bg-[#00D0EB] hover:text-black rounded-md transition-colors"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
