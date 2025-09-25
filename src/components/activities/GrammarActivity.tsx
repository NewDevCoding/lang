import { FileText } from "lucide-react";
import ActivityButton from "./ActivityButton";

export default function GrammarActivity({ onClick }: { onClick?: () => void }) {
  return <ActivityButton icon={<FileText className="w-8 h-8" />} label="Grammar" onClick={onClick} />;
}
