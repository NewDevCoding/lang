import { User } from "lucide-react";
import SideBarItem from "./SideBarItem";

export default function ProfileItem() {
  return <SideBarItem href="/profile" icon={<User className="w-5 h-5" />} label="Profile" />;
}
