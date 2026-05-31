import { Sparkles, Flower2, Cake, Baby, Presentation, GraduationCap, Music } from "lucide-react";
import type { Service } from "@/types/service";
import collegeImage from '@/assets/college.jpg'
import haldiImage from '@/assets/haldi.jpg'
import DjImage from '@/assets/djParty.jpg'
import birthday from '@/assets/birthday.jpg'
import events from '@/assets/events.jpeg'




export const services: Service[] = [
  {
    id: "weddings",
    title: "Wedding Decoration",
    description: "Elegant and traditional setups for your perfect day.",
    icon: Sparkles,
    image: events,
  },
  {
    id: "haldi",
    title: "Haldi Ceremony",
    description: "Vibrant yellow themes for your traditional Haldi function.",
    icon: Flower2, 
    image: haldiImage, 
  },
  {
    id: "birthday",
    title: "Birthday Party & Naming ceremony",
    description: "Creative themes for kids and adults to make memories.",
    icon: Cake,
    image: birthday,
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
    image:collegeImage,
  },
  {
    id: "dj",
    title: "DJ Party",
    description: "Lights, sound, and atmosphere for the ultimate party night.",
    icon: Music,
    image: DjImage,
  },
];