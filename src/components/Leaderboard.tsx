export default function Leaderboard() {
  const leaders = [
    { name: "Jose Cuevas", value: 69 },
    { name: "Vic Gutierrez", value: 57 },
    { name: "Sam Peake", value: 52 },
    { name: "Ian Atkinson", value: 42 },
    { name: "Gadiel Durant", value: 41 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-white">Leaderboard</h2>
      <div className="bg-gray-800 p-4 rounded-md mt-4">
        {leaders.map((leader, index) => (
          <div
            key={leader.name}
            className="flex justify-between py-2 text-gray-300 border-b border-gray-700"
          >
            <span>
              {index + 1}. {leader.name}
            </span>
            <span>{leader.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
