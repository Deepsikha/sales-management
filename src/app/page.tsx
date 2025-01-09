import WeeklyState from "@/components/WeeklyState";
import Appointments from "@/components/Appointments";
import Leaderboard from "@/components/Leaderboard";
import StatsGrid from "@/components/StatsGrid";

export default function Home() {
  return (
    <div className="h-full overflow-auto p-4 md:pt-2 md:p-8">
      <div className="flex flex-col xl:flex-row h-auto md:h-[inherit] gap-4 md:gap-10">
        <div className="flex flex-col flex-1 xl:flex-[2] gap-4">
          <WeeklyState />
          <StatsGrid />
        </div>
        <div className="flex flex-col flex-1 gap-4 h-full">
          <Leaderboard />
          <Appointments />
        </div>
      </div>
    </div>
  );
}
