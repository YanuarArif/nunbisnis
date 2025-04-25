"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">NunBisnis</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          >
            Fitur
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          >
            Harga
          </Link>
          <Link
            href="#portfolio"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          >
            Kontak
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button>Konsultasi Gratis</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground cursor-pointer md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Fitur
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Harga
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak
            </Link>
            <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
              Konsultasi Gratis
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
