import { Sparkles, Flower2, Cake, Baby, Presentation, GraduationCap, Music } from "lucide-react";
import type { Service } from "@/types/service";





export const services: Service[] = [
  {
    id: "weddings",
    title: "Wedding Decoration",
    description: "Elegant and traditional setups for your perfect day.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
  },
  {
    id: "haldi",
    title: "Haldi Ceremony",
    description: "Vibrant yellow themes for your traditional Haldi function.",
    icon: Flower2, // Using Flower icon for Haldi
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012", 
  },
  {
    id: "birthday",
    title: "Birthday Party",
    description: "Creative themes for kids and adults to make memories.",
    icon: Cake,
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070",
  },
  {
    id: "naming",
    title: "Naming Ceremony",
    description: "Beautiful decorations to welcome your little one.",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1596464716727 cul6?q=80&w=2070", // Placeholder
  },
  {
    id: "school",
    title: "School Annual Day",
    description: "Stage setup and decor for memorable school events.",
    icon: Presentation,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
  },
  {
    id: "graduation",
    title: "College Graduation",
    description: "Professional setups for convocation and farewell parties.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070",
  },
  {
    id: "dj",
    title: "DJ Party",
    description: "Lights, sound, and atmosphere for the ultimate party night.",
    icon: Music,
    image: "https://images.unsplash.com/photo-1571266028243-d220c6a3896f?q=80&w=2070",
  },
];