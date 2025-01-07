import { agreementData, chipList, leaderBoardData } from "@/utils/constant";

import SelectionChips from "./sharedComponent/SelectionChips";

export default function Leaderboard() {
  return (
    <div className="bg-[#2A2B32] rounded-[10px] pt-2 pb-6 px-7 gap-2 h-full">
      <h5 className="text-center text-2xl text-white mb-2">Leaderboard</h5>
      <div className="flex flex-col gap-2 justify-center items-center">
        <SelectionChips chipsList={chipList} />
        <SelectionChips chipsList={agreementData} />
      </div>

      <div className="flex flex-col py-3 px-2 gap-[10px]">
        {leaderBoardData.map((item, index) => (
          <div
            className="flex justify-between bg-[#76777A] py-2 px-4 rounded-md"
            key={`${item.name}-${index}`}
          >
            <span className="text-lg text-black font-semibold">{item.id}</span>
            <span className="text-lg text-black font-semibold">
              {item.name}
            </span>
            <span className="text-lg text-black font-semibold">
              {item.point}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
