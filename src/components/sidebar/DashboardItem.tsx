import { Home } from "lucide-react";
import SideBarItem from "./SideBarItem";

export default function DashboardItem() {
  return <SideBarItem href="/dashboard" icon={<Home className="w-5 h-5" />} label="Dashboard" />;
}
