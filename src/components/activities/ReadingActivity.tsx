import { BookOpen } from "lucide-react";
import ActivityButton from "./ActivityButton";

export default function ReadingActivity({ onClick }: { onClick?: () => void }) {
  return <ActivityButton icon={<BookOpen className="w-8 h-8" />} label="Reading" onClick={onClick} />;
}


