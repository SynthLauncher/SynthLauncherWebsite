import { Card } from "./ui/card";
import { InfoCardProps } from "@/types/types";

const InfoCard = ({ name, icon: Icon }: InfoCardProps) => {
  return (
    <Card className="p-5 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300 overflow-scroll text-center">
      <Icon className="h-8 w-8 text-purple-400 mb-3 mx-auto" />

      <h3 className="sm:text-lg text-sm font-semibold text-white">{name}</h3>
    </Card>
  );
};

export default InfoCard;
