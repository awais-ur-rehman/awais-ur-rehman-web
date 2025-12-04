"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "./Marquee";

const marqueeItems = [
  "Software Engineer",
  "Full Stack Developer",
  "Creative Designer",
];

const navItems = [
  { href: "/", label: "Home", icon: "/assets/navbar/awais.svg" },
  { href: "/projects", label: "Projects", icon: "/assets/navbar/awais.svg" },
  { href: "/awards", label: "Awards", icon: "/assets/navbar/awais.svg" },
];

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 sm:pb-8">
        <div className="relative max-w-2xl w-full mx-3 sm:mx-4">
          {/* Navbar Container */}
          <div className={`flex items-center gap-3 sm:gap-4 bg-secondary px-3 py-2.5 sm:px-6 sm:py-5 ${isDrawerOpen ? 'rounded-b-2xl' : 'rounded-2xl'}`}>
            {/* Avatar Square */}
            <div className="flex-shrink-0 rounded-xl bg-primary p-1 sm:p-1.5">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-[12px] overflow-hidden">
                <Image
                  src="/assets/navbar/awais.svg"
                  alt="Awais Ur Rehman"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Name and Marquee */}
            <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0 flex-1">
              <h2 className="navbar-name whitespace-nowrap">
                Awais Ur Rehman
              </h2>
              <div className="w-full overflow-hidden">
                <Marquee items={marqueeItems} />
              </div>
            </div>

            {/* Menu Toggle Button */}
            <button
              onClick={toggleDrawer}
              className="flex-shrink-0 cursor-pointer p-1.5 sm:p-2 transition-opacity hover:opacity-80"
              aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isDrawerOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src="/assets/navbar/Close_LG.svg"
                      alt="Close"
                      width={24}
                      height={24}
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src="/assets/navbar/Hamburger_LG.svg"
                      alt="Menu"
                      width={24}
                      height={24}
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Drawer Overlay - part of navbar, same width, slides from navbar top */}
          <AnimatePresence>
            {isDrawerOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/50 z-40"
                  onClick={closeDrawer}
                />

                {/* Drawer Panel - matches navbar width, no gap */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 200,
                    duration: 0.4,
                  }}
                  className="absolute bottom-full left-0 right-0 bg-secondary rounded-t-2xl overflow-hidden z-50"
                  style={{ maxHeight: "60vh" }}
                >
                  <div className="overflow-y-auto max-h-[60vh]">
                    <div className="px-3 sm:px-6 pt-6 pb-4">
                      {/* Navigation Items */}
                      <motion.div
                        initial="closed"
                        animate="open"
                        variants={{
                          open: {
                            transition: {
                              staggerChildren: 0.1,
                              delayChildren: 0.2,
                            },
                          },
                          closed: {
                            transition: {
                              staggerChildren: 0.05,
                              staggerDirection: -1,
                            },
                          },
                        }}
                        className="flex flex-col gap-4"
                      >
                        {navItems.map((item, index) => {
                          const isActive = pathname === item.href;
                          return (
                            <motion.div
                              key={item.href}
                              variants={{
                                open: {
                                  y: 0,
                                  opacity: 1,
                                  transition: {
                                    type: "spring",
                                    damping: 20,
                                    stiffness: 100,
                                  },
                                },
                                closed: {
                                  y: 50,
                                  opacity: 0,
                                  transition: {
                                    type: "spring",
                                    damping: 20,
                                    stiffness: 100,
                                  },
                                },
                              }}
                            >
                              <Link
                                href={item.href}
                                onClick={closeDrawer}
                                className={`flex items-center gap-4 rounded-2xl transition-all px-4 py-4 sm:px-6 sm:py-5 ${isActive
                                  ? "bg-white/10"
                                  : "hover:bg-white/5"
                                  }`}
                              >
                                {/* Icon Box */}
                                <div className="flex-shrink-0 rounded-xl bg-primary p-1 sm:p-1.5">
                                  <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-[12px] overflow-hidden">
                                    <Image
                                      src={item.icon}
                                      alt={item.label}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                </div>

                                {/* Label */}
                                <span
                                  className={`navbar-name text-lg sm:text-xl ${isActive ? "text-primary" : "text-primary/90"
                                    }`}
                                >
                                  {item.label}
                                </span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}

