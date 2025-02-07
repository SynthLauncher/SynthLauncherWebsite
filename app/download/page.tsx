"use client";

import { motion } from "framer-motion";
import {
  Check,
  Download,
  Shield,
  Terminal,
  Code,
  Cpu,
  Layers,
  Users,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { platforms, securityFeatures } from "@/lib/data";
import DownloadCard from "@/components/download-card";
import SecurityCard from "@/components/security";

export default function DownloadPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Download SynthLauncher
          </h1>
          <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
            Choose your platform and get started with SynthLauncher today. All
            versions come with our full suite of features and regular updates.
          </p>
        </motion.div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <DownloadCard
                features={platform.features}
                image={platform.icon}
                name={platform.name}
                requirements={platform.requirements}
                size={platform.size}
                type={platform.type}
                version={platform.version}
                imageWidth={40}
                imageHeight={40}
              />
            </motion.div>
          ))}
        </div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-800/40 border-purple-500/30 backdrop-blur-sm bg-transparent flex">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8" 
            >
              {securityFeatures.map((feature, index) => (
                <SecurityCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </Card>
        </motion.div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <Card className="p-8 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">
              System Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Windows
                </h4>
                <ul className="space-y-2 text-purple-200/80">
                  <li>Windows 10 or later</li>
                  <li>4GB RAM minimum</li>
                  <li>2GB disk space</li>
                  <li>DirectX 11 compatible GPU</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">macOS</h4>
                <ul className="space-y-2 text-purple-200/80">
                  <li>macOS 11 or later</li>
                  <li>4GB RAM minimum</li>
                  <li>2GB disk space</li>
                  <li>Metal compatible GPU</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Linux</h4>
                <ul className="space-y-2 text-purple-200/80">
                  <li>Modern Linux distribution</li>
                  <li>4GB RAM minimum</li>
                  <li>2GB disk space</li>
                  <li>OpenGL 3.3+ GPU</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
