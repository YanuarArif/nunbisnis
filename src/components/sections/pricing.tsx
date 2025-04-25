"use client";

import React from "react";
import { motion } from "framer-motion";
import { PricingCard } from "@/components/ui/pricing-card";
import { FeatureDetailsAccordion } from "@/components/ui/feature-details-accordion";

export function Pricing() {
  const personalFeatures = [
    "1 Halaman Website",
    "Domain .com / .id / .co.id",
    "Hosting 1GB",
    "SSL Certificate",
    "Mobile Responsive",
    "Optimasi SEO Dasar",
    "Revisi 1x",
    "Support 7 Hari",
  ];

  const personalDetailedFeatures = [
    {
      name: "1 Halaman Website",
      description:
        "Halaman landing page yang berisi semua informasi penting tentang bisnis Anda dalam satu tampilan yang menarik.",
    },
    {
      name: "Domain .com / .id / .co.id",
      description:
        "Pilih domain yang sesuai dengan nama bisnis Anda untuk membangun identitas online yang profesional.",
    },
    {
      name: "Hosting 1GB",
      description:
        "Paket hosting 1GB yang cukup untuk website sederhana dengan kecepatan loading yang baik.",
    },
    {
      name: "SSL Certificate",
      description:
        "Sertifikat keamanan untuk melindungi data pengunjung website Anda dan meningkatkan kepercayaan.",
    },
    {
      name: "Mobile Responsive",
      description:
        "Website akan tampil dengan baik di semua perangkat, termasuk smartphone dan tablet.",
    },
    {
      name: "Optimasi SEO Dasar",
      description:
        "Pengaturan meta tag, deskripsi, dan struktur URL yang SEO-friendly untuk membantu website Anda ditemukan di mesin pencari.",
    },
  ];

  const professionalFeatures = [
    "5 Halaman Website",
    "Domain .com / .id / .co.id",
    "Hosting 5GB",
    "SSL Certificate",
    "Mobile Responsive",
    "Optimasi SEO Menengah",
    "Form Kontak & Maps",
    "Integrasi Media Sosial",
    "Revisi 3x",
    "Support 14 Hari",
  ];

  const professionalDetailedFeatures = [
    {
      name: "5 Halaman Website",
      description:
        "Berisi halaman Beranda, Tentang Kami, Layanan, Portfolio, dan Kontak untuk menampilkan bisnis Anda secara lengkap.",
    },
    {
      name: "Hosting 5GB",
      description:
        "Paket hosting yang lebih besar untuk menampung lebih banyak konten dan gambar berkualitas tinggi.",
    },
    {
      name: "Optimasi SEO Menengah",
      description:
        "Termasuk riset kata kunci, optimasi gambar, sitemap XML, dan integrasi dengan Google Analytics.",
    },
    {
      name: "Form Kontak & Maps",
      description:
        "Form kontak interaktif dan integrasi Google Maps untuk memudahkan pengunjung menghubungi dan menemukan lokasi bisnis Anda.",
    },
    {
      name: "Integrasi Media Sosial",
      description:
        "Menampilkan feed media sosial dan tombol berbagi untuk meningkatkan engagement dan jangkauan online Anda.",
    },
    {
      name: "Revisi 3x",
      description:
        "Kesempatan untuk melakukan perubahan desain atau konten sebanyak 3 kali selama proses pengembangan.",
    },
  ];

  const enterpriseFeatures = [
    "10+ Halaman Website",
    "Domain Premium",
    "Hosting 10GB",
    "SSL Certificate",
    "Mobile Responsive",
    "Optimasi SEO Lanjutan",
    "Form Kontak & Maps",
    "Integrasi Media Sosial",
    "Sistem Login Admin",
    "Fitur E-commerce Dasar",
    "Revisi Unlimited",
    "Support 30 Hari",
  ];

  const enterpriseDetailedFeatures = [
    {
      name: "10+ Halaman Website",
      description:
        "Website lengkap dengan halaman khusus untuk setiap layanan, testimoni, FAQ, blog, dan halaman lain sesuai kebutuhan bisnis Anda.",
    },
    {
      name: "Domain Premium",
      description:
        "Domain premium dengan ekstensi pilihan (.com, .id, .co.id, atau lainnya) untuk branding yang lebih kuat.",
    },
    {
      name: "Hosting 10GB",
      description:
        "Paket hosting berkapasitas besar dengan performa tinggi untuk menangani traffic website yang padat.",
    },
    {
      name: "Optimasi SEO Lanjutan",
      description:
        "Strategi SEO komprehensif termasuk riset kompetitor, optimasi kecepatan website, dan struktur data terstruktur.",
    },
    {
      name: "Sistem Login Admin",
      description:
        "Panel admin khusus untuk mengelola konten website secara mandiri tanpa perlu keahlian teknis.",
    },
    {
      name: "Fitur E-commerce Dasar",
      description:
        "Fitur untuk menampilkan produk, keranjang belanja, dan proses checkout untuk menjual produk/jasa secara online.",
    },
    {
      name: "Revisi Unlimited",
      description:
        "Revisi desain dan konten tanpa batas selama proses pengembangan untuk hasil yang sempurna.",
    },
    {
      name: "Support 30 Hari",
      description:
        "Dukungan teknis selama 30 hari setelah website diluncurkan untuk memastikan semua berjalan dengan baik.",
    },
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

        {/* Pricing Cards Row */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
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
            price="Rp 3.500.000"
            description="Ideal untuk bisnis kecil hingga menengah yang membutuhkan website profesional."
            features={professionalFeatures}
            colorVariant="purple"
            popular={true}
            buttonText="Pilih Paket Professional"
          />

          <PricingCard
            title="Website Enterprise"
            price="Rp 7.500.000"
            description="Solusi lengkap untuk perusahaan besar dengan kebutuhan website kompleks."
            features={enterpriseFeatures}
            colorVariant="green"
            buttonText="Pilih Paket Enterprise"
          />
        </div>

        {/* Accordions Row - Completely separate from cards */}
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div>
            <FeatureDetailsAccordion
              detailedFeatures={personalDetailedFeatures}
              colorVariant="blue"
            />
          </div>

          <div>
            <FeatureDetailsAccordion
              detailedFeatures={professionalDetailedFeatures}
              colorVariant="purple"
            />
          </div>

          <div>
            <FeatureDetailsAccordion
              detailedFeatures={enterpriseDetailedFeatures}
              colorVariant="green"
            />
          </div>
        </div>

        {/* No separate accordions row needed anymore */}

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
