import { LogOut } from "lucide-react";
import SideBarItem from "./SideBarItem";

export default function LogoutItem() {
  return <SideBarItem href="/logout" icon={<LogOut className="w-5 h-5" />} label="Logout" />;
}
