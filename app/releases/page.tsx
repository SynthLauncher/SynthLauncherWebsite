"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bug,
  Check,
  Download,
  FileDown,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Globe,
  Package,
  Rocket,
  Shield,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ReleasesPage() {


  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-5">
        {/* Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Release History
          </h1>
          <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
            Track our journey of continuous improvement and innovation. Each release
            brings new features and enhancements to ModernUI.
          </p>
        </motion.div> */}

        {/* Latest Release */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-purple-900/30 border-purple-500/30">
            <div className="relative h-64">
              <img
                src={releases[0].banner}
                alt="Release banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-purple-500/20 backdrop-blur-sm text-purple-200 rounded-full text-sm mb-4">
                  Latest Release
                </span>
                <h2 className="text-3xl font-bold text-white mb-2">
                  v{releases[0].version} - {releases[0].title}
                </h2>
                <p className="text-purple-200/80">{releases[0].description}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {releases[0].stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-purple-200/60 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Release Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {releases[0].highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center space-x-2 text-purple-200"
                    >
                      <Check className="h-5 w-5 text-green-400" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {releases[0].changes.map((change) => (
                  <div
                    key={change.title}
                    className="flex items-start space-x-4"
                  >
                    <change.icon className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">
                        {change.title}
                      </h4>
                      <p className="text-purple-200/60">{change.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Download className="mr-2 h-4 w-4" /> Download v
                  {releases[0].version}
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-200 hover:bg-purple-500/20"
                >
                  <FileDown className="mr-2 h-4 w-4" /> Release Notes
                </Button>
              </div>
            </div>
          </Card>
        </motion.div> */}

        {/* Previous Releases Timeline */}
        <div className="space-y-8">
          {/* Add previous releases here */}
        </div>
      </div>
    </div>
  );
}