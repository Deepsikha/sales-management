export default function Appointments() {
  const appointments = [
    { name: "Elvis Presley", date: "9/16", time: "2:00pm" },
    { name: "Riley Reid", date: "9/16", time: "4:00pm" },
    { name: "John Smith", date: "9/17", time: "2:30pm" },
    { name: "Jason Born", date: "9/17", time: "3:30pm" },
    { name: "Jorge Clone", date: "9/18", time: "7:00pm" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-white">Appointments</h2>
      <div className="bg-gray-800 p-4 rounded-md mt-4">
        {appointments.map((appt) => (
          <div
            key={appt.name}
            className="flex justify-between py-2 text-gray-300 border-b border-gray-700"
          >
            <span>{appt.name}</span>
            <span>
              {appt.date} {appt.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
