"use client";

import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/ui/testimonial-card";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted scroll-mt-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Loved by Our Clients
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Don't just take our word for it. Here is what our happy clients have
            to say.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
