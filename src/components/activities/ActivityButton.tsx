import Link from "next/link";
import { ReactNode } from "react";

interface ActivityButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
}

export default function ActivityButton({ icon, label, onClick, href }: ActivityButtonProps) {
  const classes = "flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gray-100 hover:bg-gray-200 transition";

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes} role="button" aria-label={label}>
        {icon}
        <span className="text-sm mt-1">{label}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} aria-label={label}>
      {icon}
      <span className="text-sm mt-1">{label}</span>
    </button>
  );
}
