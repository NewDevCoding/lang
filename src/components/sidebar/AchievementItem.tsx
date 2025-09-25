import { Trophy } from "lucide-react";
import SideBarItem from "./SideBarItem";

export default function AchievementsItem() {
  return <SideBarItem href="/achievements" icon={<Trophy className="w-5 h-5" />} label="Achievements" />;
}
