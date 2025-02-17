"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { platforms } from "@/lib/data";
import DownloadCard from "@/components/download-card";

export default function DownloadPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto mt-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Download SynthLauncher
          </h1>

          <p className="text-xl text-sky-200/80 max-w-2xl mx-auto">
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
      </div>
    </div>
  );
}



