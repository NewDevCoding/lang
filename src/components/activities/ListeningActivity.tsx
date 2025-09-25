import { Headphones } from "lucide-react";
import ActivityButton from "./ActivityButton";

export default function ListeningActivity({ onClick }: { onClick?: () => void }) {
  return <ActivityButton icon={<Headphones className="w-8 h-8" />} label="Listening" onClick={onClick} />;
}
