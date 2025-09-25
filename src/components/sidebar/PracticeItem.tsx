import { Heart } from "lucide-react";
import SideBarItem from "./SideBarItem";

export default function PracticeItem() {
  return <SideBarItem href="/practice" icon={<Heart className="w-5 h-5" />} label="Practice" />;
}
