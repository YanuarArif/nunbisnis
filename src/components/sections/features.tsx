"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Search,
  Zap,
  Shield,
  PenTool,
  BarChart,
} from "lucide-react";

const features = [
  {
    name: "Responsif di Semua Perangkat",
    description:
      "Website yang kami buat akan tampil sempurna di semua perangkat, mulai dari smartphone, tablet, hingga desktop.",
    icon: Smartphone,
    color: "blue",
  },
  {
    name: "Optimasi SEO",
    description:
      "Kami memastikan website Anda teroptimasi untuk mesin pencari agar mudah ditemukan oleh calon pelanggan.",
    icon: Search,
    color: "purple",
  },
  {
    name: "Performa Cepat",
    description:
      "Website dengan performa loading yang cepat untuk pengalaman pengguna yang lebih baik dan peringkat SEO yang lebih tinggi.",
    icon: Zap,
    color: "green",
  },
  {
    name: "Keamanan Terjamin",
    description:
      "Kami menerapkan standar keamanan terbaik untuk melindungi website dan data Anda dari ancaman cyber.",
    icon: Shield,
    color: "blue",
  },
  {
    name: "Desain Modern",
    description:
      "Tampilan website yang modern, profesional, dan sesuai dengan identitas brand Anda.",
    icon: PenTool,
    color: "purple",
  },
  {
    name: "Analitik Lengkap",
    description:
      "Pantau performa website Anda dengan analitik yang lengkap dan mudah dipahami.",
    icon: BarChart,
    color: "green",
  },
];

export function Features() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Keunggulan Layanan Kami
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Kami menawarkan solusi website terbaik dengan berbagai fitur
            unggulan untuk membantu bisnis Anda tumbuh.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="relative rounded-2xl border p-6 shadow-sm transition-all hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-${feature.color}-500/10`}
              >
                <feature.icon className={`h-6 w-6 text-${feature.color}-500`} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
