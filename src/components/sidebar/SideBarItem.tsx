import Link from "next/link";
import { ReactNode } from "react";

interface SidebarItemProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function SidebarItem({ href, icon, label }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-200 transition"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
