import { appointments } from "@/utils/constant";

export default function Appointments() {
  return (
    <div className="bg-[#2A2B32] rounded-[10px] pt-2 pb-6 px-7 gap-2 h-full">
      <h5 className="text-center text-2xl text-white">Appointments</h5>

      <div className="flex flex-col py-3 px-2 gap-[10px]">
        {appointments.map((item, index) => (
          <div
            className="flex justify-between bg-[#76777A] py-2 px-4 rounded-md"
            key={`${item.name}-${index}`}
          >
            <span className="text-lg text-black font-semibold">
              {item.name}
            </span>
            <span className="text-lg text-black font-semibold">
              {item.date}
            </span>
            <span className="text-lg text-black font-semibold">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
