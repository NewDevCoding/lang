import { Settings } from "lucide-react";
import SideBarItem from "./SideBarItem";

export default function SettingsItem() {
  return <SideBarItem href="/settings" icon={<Settings className="w-5 h-5" />} label="Settings" />;
}
