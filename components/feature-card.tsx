import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

import { FeatureCardProps } from "@/types/types";

const FeatureCard = ({
  title,
  icon: Icon,
  description,
  className,
  iconClassName,
  titleClassName,
  descriptionClassName,
}: FeatureCardProps) => {
  return (
    <Card
      className={cn(
        "p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300",
        className
      )}
    >
      <Icon className={cn("h-12 w-12 text-purple-400 mb-4", iconClassName)} />

      <h3
        className={cn("text-xl font-semibold text-white mb-2", titleClassName)}
      >
        {title}
      </h3>

      <p className={cn("text-purple-200/80", descriptionClassName)}>
        {description}
      </p>
    </Card>
  );
};

export default FeatureCard;
