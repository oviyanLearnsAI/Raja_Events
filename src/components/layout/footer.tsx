import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
// import { Facebook, Instagram, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background text-foreground py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              {SITE_CONFIG.name.split(" ")[0]}{" "}
              <span className="text-primary">Events</span>
            </h3>
            <p className="text-sm max-w-md text-muted-foreground">
              Crafting unforgettable moments for weddings, corporate gatherings,
              and private celebrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#services"
                  className="hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="hover:text-foreground transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 items-center text-muted-foreground">
              <Link
                href={SITE_CONFIG.links.instagram}
                className="hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                {/* <Instagram size={20} /> */}
              </Link>
              <Link
                href={SITE_CONFIG.links.facebook}
                className="hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                {/* <Facebook size={20} /> */}
              </Link>
              <Link
                href={SITE_CONFIG.links.whatsapp}
                className="hover:text-foreground transition-colors"
                aria-label="WhatsApp"
              >
                {/* <Phone size={20} /> */}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-xs text-muted-foreground">
          © {currentYear} {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
