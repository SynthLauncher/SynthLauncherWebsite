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
        "p-8 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300",
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

      <p className={cn("text-purple-200/80 mb-4", versionClassName)}>
        {version}
      </p>

      <div
        className={cn(
          "flex justify-between items-center text-purple-200/60 mb-6",
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
              "flex items-center text-purple-200/80",
              featureClassName
            )}
          >
            <Check className="w-4 h-4 mr-2 text-green-400" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <p
        className={cn("text-purple-200/60 text-sm mb-6", requirementsClassName)}
      >
        {requirements}
      </p>

      <Button
        className={cn(
          "w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
          buttonClassName
        )}
      >
        <Download className="mr-2 h-4 w-4" /> Download
      </Button>
    </Card>
  );
};

export default DownloadCard;
