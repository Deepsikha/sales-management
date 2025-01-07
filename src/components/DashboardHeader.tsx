import Image from "next/image";

import AngleDown from "./iconComponent/AngleDownIcon";
import NotificationIcon from "./iconComponent/NotificationIcon";

export default function DashboardHeader() {
  return (
    <div className="py-4 px-6">
      <div className="flex items-center justify-end gap-16">
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
    </div>
  );
}
