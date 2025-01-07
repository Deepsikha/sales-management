import { weeklyStateData } from "@/utils/constant";

import WeeklyStateData from "./sharedComponent/WeeklyStateData";

export default function WeeklyState() {
  return (
    <>
      <div className="bg-[#2A2B32] rounded-[10px] py-6 px-7">
        <div className="flex flex-col lg:flex-row gap-7">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl font-bold text-white">Hello Vic</h2>
            <h5 className="text-base text-white text-center">Weekly Stats</h5>
            <div className="flex gap-5 items-center justify-between">
              <div className="flex flex-col items-center">
                <p className="text-base font-medium text-white">Sets</p>
                <p className="text-base font-medium text-white">18</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-base font-medium text-white">Sales</p>
                <p className="text-base font-medium text-white">7</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-base font-medium text-white">Installs</p>
                <p className="text-base font-medium text-white">4</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <div className="flex  max-w-[170px] w-full ml-auto border border-black rounded-lg overflow-hidden justify-end items-start">
              <button className="flex bg-[#76777A] text-white text-sm font-semibold py-2 px-4 border-r border-black">
                <h5>Signed</h5>
              </button>
              <button className="flex bg-[#76777A] text-white text-sm font-semibold py-2 px-4 ">
                <h5>Installed</h5>
              </button>
            </div>
            <div className="flex flex-col gap-[9px] ">
              {weeklyStateData.map((item) => (
                <WeeklyStateData
                  name={item.name}
                  signed={item.signed}
                  installed={item.installed}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
