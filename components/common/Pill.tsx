import React from "react";

type PillProps = {
  title: string;
  selected?: boolean;
  icon?: React.ReactNode;
  onClick?: (title: string) => void;
};

const Pill: React.FC<PillProps> = ({ title, selected = false, icon, onClick }) => {
  const baseClasses = "p-4 text-sm rounded-full border transition flex items-center gap-2";
  const selectedClasses = selected
    ? "border-[#161117] text-[#161117] font-semibold"
    : "border-[#e9e9e9] text-[#8C8C8C]";

  return (
    <button
      className={`${baseClasses} ${selectedClasses}`}
      onClick={() => onClick?.(title)}
      aria-pressed={selected}
    >
      {icon}
      {title}
    </button>
  );
};

export default Pill;

