const Badge = ({ children, color = 'blue' }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    red: "bg-red-50 text-red-600",
    green: "bg-green-50 text-green-600",
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${colors[color]}`}>
      {children}
    </span>
  );
};

export default Badge;