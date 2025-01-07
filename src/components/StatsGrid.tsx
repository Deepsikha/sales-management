export default function StatsGrid() {
  const stats = [
    { label: "Progressing", value: 57 },
    { label: "Site Survey", value: 42 },
    { label: "Permitting", value: 39 },
    { label: "Permits Received", value: 22 },
    { label: "Scheduled", value: 19 },
    { label: "Installed", value: 69 },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-blue-500 text-center py-4 text-2xl font-bold rounded-md"
        >
          {stat.value}
          <p className="text-sm font-normal text-white">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
