import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon; 
  image: string; 
}
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}