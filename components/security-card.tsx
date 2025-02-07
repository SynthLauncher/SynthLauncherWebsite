import { Card } from "./ui/card";
import { SecurityCardProps } from "@/types/types";

const SecurityCard = ({
  icon: Icon,
  title,
  description,
  
  className,
  innerClassName,
  boxClassName,
  iconClassName,
  titleClassName,
  descriptionClassName,
}: SecurityCardProps) => {
  return (
    <Card className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-800/40 border-purple-500/30 backdrop-blur-sm bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <Icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />

          <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>

          <p className="text-purple-200/80">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default SecurityCard;
