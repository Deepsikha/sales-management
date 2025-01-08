import { chipList, stats } from "@/utils/constant";

import SelectionChips from "./sharedComponent/SelectionChips";

export default function StatsGrid() {
  return (
    <div className="bg-[#2A2B32] rounded-[10px] pt-4 pb-4 lg:pb-6 px-4 lg:px-7 gap-2 h-full">
      <div className="text-center mx-auto">
        <SelectionChips chipsList={chipList} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-2 p-1 lg:p-4 h-[calc(100%-42px)]">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#00D0EB] text-center py-4 rounded-[15px] flex flex-col flex-1 h-full"
          >
            <p className=" text-xs md:text-base font-medium md:font-bold text-white">{stat.label}</p>
            <h3 className="text-4xl lg:text-8xl text-white flex-1 flex justify-center items-center">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
