import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ label, onClick, style, variant = "primary" }) => {
  const base = "px-8 py-3 font-medium text-[20px]/[1.5] rounded-[60px]";
  const variants: Record<string, string> = {
    primary: "bg-[#161117] text-white",
    secondary: "bg-[#e9e9e9] text-[#161117]",
    outline: "border border-[#e9e9e9] text-[#161117]",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${style ?? ""}`}> {label} </button>
  );
};

export default Button;

