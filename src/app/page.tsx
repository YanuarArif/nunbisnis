"use client";

import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { ArrowUp, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <Hero />

        <div id="features">
          <Features />
        </div>

        <div id="pricing">
          <Pricing />
        </div>

        {/* Simple Contact Section */}
        <section id="contact" className="bg-background py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Hubungi Kami
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Konsultasikan kebutuhan website Anda dengan tim kami
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:nunbisnis@gmail.com"
                  className="flex items-center gap-2 text-primary hover:underline cursor-pointer"
                >
                  <Mail className="h-5 w-5" />
                  nunbisnis@gmail.com
                </a>
                <a
                  href="https://wa.me/6285725300663"
                  className="flex items-center gap-2 text-primary hover:underline cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  +62 857-2530-0663
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} NunBisnis. Hak Cipta
                Dilindungi.
              </p>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Kembali ke atas</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
