"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Jasa Pembuatan</span>
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
                Website Profesional
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
              Wujudkan kehadiran online Anda dengan website yang modern,
              responsif, dan sesuai kebutuhan bisnis Anda. Kami menawarkan
              solusi website terbaik dengan harga terjangkau.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="group">
                Konsultasi Gratis
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Lihat Portfolio
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative grid grid-cols-2 gap-6">
              <motion.div
                className="flex h-32 w-32 items-center justify-center rounded-2xl bg-blue-500/10 p-4 shadow-lg sm:h-40 sm:w-40"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Code className="h-12 w-12 text-blue-500" />
              </motion.div>
              <motion.div
                className="flex h-32 w-32 items-center justify-center rounded-2xl bg-purple-500/10 p-4 shadow-lg sm:h-40 sm:w-40"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Layers className="h-12 w-12 text-purple-500" />
              </motion.div>
              <motion.div
                className="flex h-32 w-32 items-center justify-center rounded-2xl bg-emerald-500/10 p-4 shadow-lg sm:h-40 sm:w-40"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Zap className="h-12 w-12 text-emerald-500" />
              </motion.div>
              <motion.div
                className="flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10 p-4 shadow-lg sm:h-40 sm:w-40"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-center font-bold">
                  <span className="block text-3xl text-foreground">100%</span>
                  <span className="text-sm text-muted-foreground">
                    Responsif
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
