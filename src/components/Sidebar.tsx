"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/logo.png";

import DashboardIcon from "./iconComponent/DashboardIcon";
import LeaderBoard from "./iconComponent/LeaderBoardIcon";
import ProfileIcon from "./iconComponent/ProfileIcon";
import ResourceIcon from "./iconComponent/ResourceIcon";
import SignOut from "./iconComponent/SignOutIcon";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
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

  return (
    <div className="min-w-64 w-full flex flex-col flex-1 h-full">
      <div className="p-4 text-2xl font-bold mx-auto">
        <Image src={Logo} alt={"logo"} priority />
      </div>
      <nav className="flex-1 overflow-auto border-r pt-10 pl-[23px] pr-3 border-[#00D0EB]">
        {menuItems.map((item) => (
          <div key={item.name}>
            <Link
              href={item.path}
              className={`flex items-center font-medium text-[#87888C] gap-2 rounded-md py-2 px-3 hover:bg-[#00D0EB] hover:text-black transition-colors ${
                active === item.name
                  ? "bg-[#00D0EB] !text-[#171821] !font-semibold text-base"
                  : ""
              }`}
              onClick={() => setActive(item.name)}
            >
              <div
                className={"w-6 h-6 min-w-6 flex items-center justify-center"}
              >
                <item.icon
                  className={`text-lg ${
                    active === item.name ? "text-black" : "text-white"
                  }`}
                />
              </div>
              {item.name}
            </Link>
            {item.subMenu && active === item.name && (
              <div className="ml-9 mt-2">
                {item.subMenu.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.path}
                    className="flex font-medium text-base text-[#87888C] py-2 px-3 hover:bg-[#00D0EB] hover:text-black rounded-md transition-colors"
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
