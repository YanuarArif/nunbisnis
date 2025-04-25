"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  showTooltip?: boolean;
}

export function FloatingWhatsAppButton({
  phoneNumber,
  message = "Halo, saya tertarik dengan jasa pembuatan website Anda.",
  showTooltip = true,
}: FloatingWhatsAppButtonProps) {
  const handleClick = () => {
    // Format the phone number (remove any non-digit characters)
    const formattedPhone = phoneNumber.replace(/\D/g, "");

    // Create the WhatsApp URL with the phone number and message
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <button
        onClick={handleClick}
        className="relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-offset-2"
        aria-label="Chat via WhatsApp"
      >
        <FaWhatsapp className="h-10 w-10" />

        {/* Pulse animation */}
        <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-25"></span>
      </button>

      {/* Tooltip - Only shown if showTooltip is true */}
      {showTooltip && (
        <div className="absolute -top-12 right-0 scale-0 transition-all duration-200 group-hover:scale-100">
          <div className="rounded-md bg-black/80 px-3 py-1.5 text-xs font-medium text-white shadow-sm">
            Chat WhatsApp
          </div>
          <div className="absolute right-6 top-[100%] h-2 w-2 rotate-45 transform bg-black/80"></div>
        </div>
      )}
    </motion.div>
  );
}
