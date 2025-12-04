"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles =
    "relative inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all overflow-visible";
  const variantStyles =
    variant === "primary"
      ? "bg-secondary text-primary hover:opacity-90"
      : "bg-primary text-secondary border-2 border-secondary hover:bg-secondary hover:text-primary";

  const buttonContent = (
    <>
      {/* Circle with icon that slides out on hover */}
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{
          x: isHovered ? -56 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          x: { duration: 0.3, ease: "easeOut" },
          opacity: { duration: 0.2, ease: "easeOut" },
        }}
        className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-secondary"
        style={{ left: "-8px" }}
      >
        <span className="text-2xl leading-none">🤙</span>
      </motion.div>

      {/* Button Text */}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variantStyles} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {buttonContent}
    </button>
  );
}

