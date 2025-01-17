export interface WeeklyStateData {
  name: string;
  signed?: number | string;
  installed?: number | string;
}

const WeeklyStateData: React.FC<WeeklyStateData> = ({
  name,
  signed,
  installed,
}) => {
  return (
    <div className="bg-[#76777A] rounded-md py-2 p-2 sm:px-4 flex justify-between items-center">
      <span className="flex-1">
        <h5 className="text-sm sm:text-lg text-black font-semibold px-1 sm:px-2">{name}</h5>
      </span>
      <div className="flex justify-start max-w-[160px] w-full">
        <h5 className="text-sm sm:text-lg text-black max-w-[80px] w-full font-semibold px-2 sm:px-2 text-right">
          {signed}
        </h5>
        <h5 className="text-sm sm:text-lg text-black max-w-[80px] w-full font-semibold px-2 sm:px-2 text-right">
          {installed}
        </h5>
      </div>
    </div>
  );
};

export default WeeklyStateData;
