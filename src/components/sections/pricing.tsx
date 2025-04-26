"use client";

import React from "react";
import { motion } from "framer-motion";
import { PricingCard } from "@/components/ui/pricing-card";

export function Pricing() {
  // One-time payment features
  const personalFeatures = [
    "1-5 Halaman Website",
    "Domain .com",
    "Hosting 1GB",
    "SSL Certificate",
    "Mobile Responsive",
    "Website Static",
    "Revisi 3x",
    "Support 7 Hari",
  ];

  // Removed unused features arrays

  // Removed unused detailed features arrays

  // One-time payment features
  const professionalFeatures = [
    "5-10 Halaman Website",
    "Domain .com / .id",
    "Hosting 5GB",
    "SSL Certificate",
    "Mobile Responsive",
    "Website Dinamis (Toko Online)",
    "Form Kontak & Maps",
    "Integrasi Media Sosial",
    "Revisi 10x",
    "Support 14 Hari",
  ];

  // One-time payment features
  const enterpriseFeatures = [
    "10+ Halaman Website",
    "Domain Premium",
    "Hosting 20GB",
    "SSL Certificate",
    "Mobile Responsive",
    "Optimasi SEO Lanjutan",
    "Form Kontak & Maps",
    "Integrasi Media Sosial",
    "Sistem Login Admin",
    "Fitur Payment Gateway untuk E-commerce",
    "Revisi Unlimited",
    "Support 30 Hari",
  ];

  return (
    <section id="pricing" className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pilih Paket Sesuai Kebutuhan Anda
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Kami menawarkan berbagai paket pembuatan website yang dapat
            disesuaikan dengan kebutuhan dan anggaran Anda.
          </p>
        </motion.div>

        {/* One-time Payment Pricing Cards Row */}
        <motion.div
          className="mx-auto max-w-3xl text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold tracking-tight">
            Pembayaran Sekali
          </h3>
          <p className="mt-2 text-md text-muted-foreground">
            Bayar sekali untuk pembuatan website lengkap
          </p>
        </motion.div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <PricingCard
            title="Website Pribadi"
            price="Rp 1.500.000"
            description="Cocok untuk website personal, portofolio, atau blog pribadi."
            features={personalFeatures}
            colorVariant="blue"
            buttonText="Pilih Paket Pribadi"
          />

          <PricingCard
            title="Website Professional"
            price="Rp 2.500.000"
            description="Ideal untuk bisnis kecil hingga menengah yang membutuhkan website profesional."
            features={professionalFeatures}
            colorVariant="purple"
            popular={true}
            buttonText="Pilih Paket Professional"
          />

          <PricingCard
            title="Website Enterprise"
            price="Rp 4.500.000"
            description="Solusi lengkap untuk perusahaan besar dengan kebutuhan website kompleks."
            features={enterpriseFeatures}
            colorVariant="green"
            buttonText="Pilih Paket Enterprise"
          />
        </div>

        {/* Recurring Payment Pricing Cards Row */}
        <motion.div
          className="mx-auto max-w-3xl text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold tracking-tight">
            Pembayaran Berlangganan
          </h3>
          <p className="mt-2 text-md text-muted-foreground">
            Perpanjangan layanan website dan dukungan teknis secara berkala
          </p>
        </motion.div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <PricingCard
            title="Website Pribadi"
            price="Rp 500.000"
            description="Perpanjangan layanan untuk website personal, portofolio, atau blog pribadi."
            colorVariant="blue"
            buttonText="Pilih Paket Pribadi"
            isMonthly="tahun"
            showFeatures={false}
          />

          <PricingCard
            title="Website Professional"
            price="Rp 200.000"
            description="Perpanjangan layanan untuk bisnis kecil hingga menengah yang membutuhkan website profesional."
            colorVariant="purple"
            popular={true}
            buttonText="Pilih Paket Professional"
            isMonthly={true}
            showFeatures={false}
          />

          <PricingCard
            title="Website Enterprise"
            price="Rp 300.000"
            description="Perpanjangan layanan untuk perusahaan besar dengan kebutuhan website kompleks."
            colorVariant="green"
            buttonText="Pilih Paket Enterprise"
            isMonthly={true}
            showFeatures={false}
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Butuh solusi khusus?{" "}
            <a
              href="#contact"
              className="font-medium text-primary hover:underline"
            >
              Hubungi kami
            </a>{" "}
            untuk konsultasi gratis.
          </p>
        </div>
      </div>
    </section>
  );
}
