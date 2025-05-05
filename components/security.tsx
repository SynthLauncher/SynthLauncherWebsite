import { cn } from "@/lib/utils";
import { SecurityCardProps } from "@/types/types";

const Security = ({
  icon: Icon,
  title,
  description,

  className,
  iconClassName,
  titleClassName,
  descriptionClassName,
}: SecurityCardProps) => {
  return (
    <div className={cn("text-center", className)}>
      <Icon
        className={cn("w-8 h-8 text-purple-400 mx-auto mb-4", iconClassName)}
      />

      <h4
        className={cn("text-lg font-semibold text-white mb-2", titleClassName)}
      >
        {title}
      </h4>

      <p className={cn("text-purple-200/80", descriptionClassName)}>
        {description}
      </p>
    </div>
  );
};

export default Security;
