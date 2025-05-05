import { Card } from "./ui/card";
import Image from "next/image";
import { Check, Download } from "lucide-react";
import { Button } from "./ui/button";
import { DownloadCardProps } from "@/types/types";
import { cn } from "@/lib/utils";

const DownloadCard = ({
  name,
  features,
  image,
  requirements,
  size,
  type,
  version,
  className,
  imageClassName,
  imageHeight,
  imageWidth,
  buttonClassName,
  featureClassName,
  nameClassName,
  requirementsClassName,
  infoBoxClassName,
  versionClassName,
}: DownloadCardProps) => {
  return (
    <Card
      className={cn(
        "p-8 bg-sky-900/30 border-sky-500/30 backdrop-blur-sm hover:bg-sky-800/40 transition-all duration-300",
        className
      )}
    >
      <Image
        width={imageWidth}
        height={imageHeight}
        alt="icon"
        src={image}
        className={cn("pb-3", imageClassName)}
      />

      <h2 className={cn("text-2xl font-bold text-white mb-2", nameClassName)}>
        {name}
      </h2>

      <p className={cn("text-sky-200/80 mb-4", versionClassName)}>
        {version}
      </p>

      <div
        className={cn(
          "flex justify-between items-center text-sky-200/60 mb-6",
          infoBoxClassName
        )}
      >
        <span>{size}</span>
        <span>{type}</span>
      </div>

      <div className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center text-sky-200/80",
              featureClassName
            )}
          >
            <Check className="w-4 h-4 mr-2 text-green-400" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <p
        className={cn("text-sky-200/60 text-sm mb-6", requirementsClassName)}
      >
        {requirements}
      </p>

      <Button
        className={cn(
          "w-full bg-gradient-to-r from-sky-600 to-purple-600 ",
          buttonClassName
        )}
      >
        <Download className="mr-2 h-4 w-4" /> Download
      </Button>
    </Card>
  );
};

export default DownloadCard;
