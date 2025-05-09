"use client";

import { motion } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/download", label: "Download" },
    { href: "/support", label: "Support" },
    { href: "/changelogs", label: "Changelogs" },
    { href: "/releases", label: "Releases" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-sky-500/20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image
                width={285}
                height={285}
                alt="logo"
                src="/navlogo.svg"
                quality={100}
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-sky-200 hover:text-sky-300 px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link href="https://github.com/SynthLauncher">
                  <Button
                    variant="outline"
                    className="bg-transparent border-sky-500 border-2 border-dashed text-white hover:text-sky-200 hover:bg-sky-500/20 active:scale-95 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-200 hover:text-white p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="lg:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/10 backdrop-blur-lg">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-purple-200 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex">
            <Link href="https://github.com/SynthLauncher" className="w-full">
              <Button
                variant="outline"
                className="w-full mx-2 mt-2
              bg-transparent border-purple-500 border-2  text-white hover:text-purple-200 hover:bg-purple-500/20"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}