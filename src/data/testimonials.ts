export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya & Arjun",
    role: "Wedding - Mumbai",
    quote: "Raja Events turned our dream wedding into reality. The attention to detail was impeccable, and we didn't have to worry about a single thing.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
  },
  {
    id: "t2",
    name: "Vikram Singh",
    role: "CEO, TechCorp",
    quote: "Professional, creative, and incredibly organized. Our product launch was a massive success thanks to their team.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
  },
  {
    id: "t3",
    name: "Ananya Sharma",
    role: "Birthday Bash",
    quote: "The decor was out of this world! Everyone at the party was asking who the planner was. Highly recommended.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
  },
];