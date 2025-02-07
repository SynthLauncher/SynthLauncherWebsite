import { Card } from "./ui/card";
import { InfoCardProps } from "@/types/types";

const InfoCard = ({ name, icon: Icon }: InfoCardProps) => {
  return (
    <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300 overflow-scroll text-center">
      <Icon className="h-8 w-8 text-purple-400 mb-3 mx-auto" />
      <h3 className="text-lg font-semibold text-white">{name}</h3>

      <div className="absolute inset-0 bg-purple-700/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-6">
        <div className="space-y-2">
          <h1 className="text-slate-200 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit..</h1>
        </div>
      </div>
    </Card>
  );
};

export default InfoCard;
