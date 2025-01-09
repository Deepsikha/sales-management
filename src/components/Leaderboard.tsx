import { agreementData, chipList, leaderBoardData } from "@/utils/constant";

import SelectionChips from "./sharedComponent/SelectionChips";

export default function Leaderboard() {
  return (
    <div className="bg-[#2A2B32] rounded-[10px] md:pt-2 py-2 px-4 md:pb-4 md:px-7 gap-2 h-full flex flex-col flex-1">
      <h5 className="text-center text-xl sm:text-2xl text-white ">
        Leaderboard
      </h5>
      <div className="flex flex-col gap-2 justify-center items-center">
        <SelectionChips chipsList={chipList} />
        <SelectionChips chipsList={agreementData} />
      </div>

      <div className="flex flex-col py-3 px-2 gap-[10px] flex-1 overflow-auto max-h-[430px]">
        {leaderBoardData.map((item, index) => (
          <div
            className="flex justify-between bg-[#76777A] py-2 px-4 rounded-md h-full items-center"
            key={`${item.name}-${index}`}
          >
            <span className="text-sm sm:text-lg 2xl:text-2xl  text-black font-semibold">
              {item.id}
            </span>
            <span className="text-sm sm:text-lg 2xl:text-2xl text-black font-semibold">
              {item.name}
            </span>
            <span className="text-sm sm:text-lg 2xl:text-2xl text-black font-semibold">
              {item.point}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
