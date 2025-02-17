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
import { changelogs, releases } from "@/lib/data";

export default function ReleasesPage() {
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
            Release History
          </h1>
          <p className="text-xl text-sky-200/80 max-w-2xl mx-auto">
            Track our journey of continuous improvement and innovation. Each release
            brings new features and enhancements to ModernUI.
          </p>
        </motion.div>


        {/* Previous changelogs */}
        <div className="space-y-8">
          {changelogs.slice(1).map((release, index) => (
            <motion.div
              key={release.version}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-6 bg-sky-900/30 border-sky-500/30 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <release.icon className="w-8 h-8 text-sky-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        v{release.version}
                      </h3>
                      <p className="text-sky-200/60">{release.date}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      release.type === "major"
                        ? "bg-sky-500/20 text-sky-200"
                        : "bg-sky-500/20 text-sky-200"
                    }`}
                  >
                    {release.type === "major"
                      ? "Major Release"
                      : "Minor Release"}
                  </span>
                </div>
                <p className="text-sky-200/80 mb-6">{release.description}</p>
                <div className="space-y-4">
                  {release.changes.map((change) => (
                    <div
                      key={change.title}
                      className="flex items-start space-x-4"
                    >
                      <change.icon className="w-5 h-5 text-sky-400 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold">
                          {change.title}
                        </h4>
                        <p className="text-sky-200/60">
                          {change.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
