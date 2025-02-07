import { LucideProps } from "lucide-react";

interface Stat {
    number: number;
    label: string;
}

export interface StatsProps {
    stats: Stat[];
    
    className?: string;
    innerClassName?: string;
    gridClassName?: string;
    numberClassName?: string;
    labelClassName?: string; 
}

export interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ComponentType<LucideProps>;

    className?: string;
    iconClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

export interface InfoCardProps {
    name: string;
    icon: React.ComponentType<LucideProps>;

    className?: string;  
    innerClassName?: string;
    iconClassName?: string;
    nameClassName?: string; 
}

export interface DownloadCardProps {
    name: string;
    version: string;
    size: string;
    type: string;
    requirements: string;
    features: string[];
    image: string;

    className?: string;
    imageClassName?: string;
    buttonClassName?: string;
    nameClassName?: string;
    versionClassName?: string;
    infoBoxClassName?: string; // !Box containing size & type!
    requirementsClassName?: string;
    featureClassName?: string;

    imageWidth?: number;
    imageHeight?: number;
}

export interface SecurityCardProps {
    icon: React.ComponentType<LucideProps>;
    title: string;
    description: string;
    
    className?: string;
    iconClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

export interface RequirementsCardProps {
    os: string;
    requirements: string[];
}