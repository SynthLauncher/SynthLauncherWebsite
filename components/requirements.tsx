import { RequirementsCardProps } from "@/types/types";

const Requirements = ({ os, requirements } : RequirementsCardProps) => {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">Windows</h4>
      <ul className="space-y-2 text-purple-200/80">
        <li>Windows 10 or later</li>
        <li>4GB RAM minimum</li>
        <li>2GB disk space</li>
        <li>DirectX 11 compatible GPU</li>
      </ul>
    </div>
  );
};

export default Requirements;
