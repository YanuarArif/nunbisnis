"use client";

import * as React from "react";
import { Check, Info, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

interface PricingCardProps extends React.ComponentProps<typeof Card> {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
  colorVariant?: "blue" | "purple" | "green";
  whatsappNumber?: string;
  whatsappMessage?: string;
  onButtonClick?: () => void;
}

export function PricingCard({
  className,
  title,
  price,
  description,
  features,
  popular = false,
  buttonText = "Pilih Paket",
  colorVariant = "blue",
  whatsappNumber = "6285725300663",
  whatsappMessage = "Halo, saya tertarik dengan paket",
  onButtonClick,
  ...props
}: PricingCardProps) {
  // Map color variants to button variants and badge variants
  const buttonVariantMap = {
    blue: "default",
    purple: "secondary",
    green: "outline",
  };

  const buttonVariant = buttonVariantMap[colorVariant] as
    | "default"
    | "secondary"
    | "outline";

  // Color classes based on variant
  const colorClasses = {
    blue: {
      badge: "bg-blue-500",
      icon: "text-blue-500",
      highlight: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-500",
      shadow: "shadow-blue-500/10",
      hover: "group-hover:bg-blue-500/10",
    },
    purple: {
      badge: "bg-purple-500",
      icon: "text-purple-500",
      highlight: "bg-purple-50 dark:bg-purple-950/30",
      border: "border-purple-500",
      shadow: "shadow-purple-500/10",
      hover: "group-hover:bg-purple-500/10",
    },
    green: {
      badge: "bg-emerald-500",
      icon: "text-emerald-500",
      highlight: "bg-emerald-50 dark:bg-emerald-950/30",
      border: "border-emerald-500",
      shadow: "shadow-emerald-500/10",
      hover: "group-hover:bg-emerald-500/10",
    },
  };

  const colors = colorClasses[colorVariant];

  // Function to handle WhatsApp button click
  const handleWhatsAppClick = () => {
    if (onButtonClick) {
      onButtonClick();
      return;
    }

    // Format the message with the package title
    const formattedMessage = `${whatsappMessage} ${title} (${price})`;

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group h-full"
    >
      <Card
        className={cn(
          "flex h-full flex-col justify-between overflow-hidden border-2 transition-all",
          popular
            ? `${colors.border} ${colors.shadow} shadow-lg`
            : "border-border",
          `${colors.hover}`,
          className
        )}
        {...props}
      >
        <div>
          <CardHeader
            className={cn("relative pb-6", popular && `${colors.highlight}`)}
          >
            {popular && (
              <div className="absolute -right-12 top-7 rotate-45 transform">
                <Badge
                  variant={colorVariant as any}
                  className="px-12 py-1 text-xs font-semibold uppercase tracking-wider text-white"
                >
                  Populer
                </Badge>
              </div>
            )}

            <div className="flex items-center gap-2">
              <Badge variant={colorVariant as any} className="px-3 py-1">
                {title}
              </Badge>
              {popular && <Sparkles className={cn("h-4 w-4", colors.icon)} />}
            </div>

            <CardTitle className="mt-4 text-3xl font-bold">
              {price}
              <span className="ml-1 text-base font-normal text-muted-foreground">
                {/* /bulan */}
              </span>
            </CardTitle>

            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          </CardHeader>

          <CardContent className="space-y-6 pb-6 flex-grow">
            <ul className="space-y-3 min-h-[300px]">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className={cn("mr-2 mt-0.5 h-5 w-5", colors.icon)} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </div>
        <CardFooter className="pt-4">
          <Button
            onClick={handleWhatsAppClick}
            variant={buttonVariant}
            className={cn(
              "w-full text-base font-medium cursor-pointer",
              colorVariant === "green" &&
                "border-emerald-500 text-emerald-500 hover:bg-emerald-50 hover:text-emerald-600"
            )}
            size="lg"
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
