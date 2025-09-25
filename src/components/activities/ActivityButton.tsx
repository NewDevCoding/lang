import { ReactNode } from "react";

interface ActivityButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export default function ActivityButton({ icon, label, onClick }: ActivityButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gray-100 hover:bg-gray-200 transition"
    >
      {icon}
      <span className="text-sm mt-1">{label}</span>
    </button>
  );
}
