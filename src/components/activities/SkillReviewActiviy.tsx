import { CheckCircle } from "lucide-react";
import ActivityButton from "./ActivityButton";

export default function SkillReviewActivity({ onClick }: { onClick?: () => void }) {
  return (
    <ActivityButton
      icon={<CheckCircle className="w-8 h-8" />}
      label="Skill Review"
      onClick={onClick}
      href="/practice/skill-review"
    />
  );
}
