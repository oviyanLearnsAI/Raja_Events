import { LucideIcon } from "lucide-react";
import { StaticImageData } from 'next/image';
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon; 
  image: string | StaticImageData; 
}
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string | StaticImageData;
}