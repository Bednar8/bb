const statistics = [
  {
    value: "98%",
    label: "Client satisfaction",
  },
  {
    value: "50+",
    label: "Completed projects",
  },
  {
    value: "100%",
    label: "Responsible",
  },
];

export default function HeroStatistics() {
  return (
    <div className="flex items-center flex-wrap gap-4 w-fit">
      {statistics.map((stat, i) => (
        <div key={stat.label} className="w-max flex items-center gap-4">
          <p className="flex items-center gap-2">
            <span className="text-white font-bold text-2xl">{stat.value}</span>
            <span>{stat.label}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
