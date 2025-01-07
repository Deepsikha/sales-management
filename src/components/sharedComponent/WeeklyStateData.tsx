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
    <div className="bg-[#76777A] rounded-md py-2 px-4 flex justify-between items-center">
      <span className="flex-1">
        <h5 className="text-lg text-black font-semibold px-4">{name}</h5>
      </span>
      <div className="flex justify-start max-w-[170px] w-full">
        <h5 className="text-lg text-black max-w-[80px] w-full font-semibold px-4 text-right">
          {signed}
        </h5>
        <h5 className="text-lg text-black max-w-[80px] w-full font-semibold px-4 text-right">
          {installed}
        </h5>
      </div>
    </div>
  );
};

export default WeeklyStateData;
