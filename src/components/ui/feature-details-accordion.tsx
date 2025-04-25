"use client";

import * as React from "react";
import { Info } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface DetailedFeature {
  name: string;
  description: string;
}

interface FeatureDetailsAccordionProps {
  detailedFeatures: DetailedFeature[];
  colorVariant: "blue" | "purple" | "green";
  className?: string;
}

export function FeatureDetailsAccordion({
  detailedFeatures,
  colorVariant,
  className,
}: FeatureDetailsAccordionProps) {
  // Color classes based on variant
  const colorClasses = {
    blue: {
      icon: "text-blue-500",
      highlight: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-500",
      shadow: "shadow-blue-500/10",
      hover: "hover:bg-blue-50 dark:hover:bg-blue-950/30",
    },
    purple: {
      icon: "text-purple-500",
      highlight: "bg-purple-50 dark:bg-purple-950/30",
      border: "border-purple-500",
      shadow: "shadow-purple-500/10",
      hover: "hover:bg-purple-50 dark:hover:bg-purple-950/30",
    },
    green: {
      icon: "text-emerald-500",
      highlight: "bg-emerald-50 dark:bg-emerald-950/30",
      border: "border-emerald-500",
      shadow: "shadow-emerald-500/10",
      hover: "hover:bg-emerald-50 dark:hover:bg-emerald-950/30",
    },
  };

  const colors = colorClasses[colorVariant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className={cn("rounded-lg border overflow-hidden", className)}
    >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="details" className="border-none">
          <AccordionTrigger
            className={cn(
              "px-4 py-3 text-sm font-medium transition-colors text-center",
              colors.hover
            )}
          >
            Lihat Detail Fitur
          </AccordionTrigger>
          <AccordionContent>
            <div className={cn("p-4", colors.highlight)}>
              <ul className="space-y-4">
                {detailedFeatures.map((feature, i) => (
                  <li key={i} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Info className={cn("h-4 w-4", colors.icon)} />
                      <span className="font-medium">{feature.name}</span>
                    </div>
                    <p className="ml-6 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
}
