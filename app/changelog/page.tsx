"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bug,
  Check,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Rocket,
  Sparkles,
  Zap,
  Star,
  Shield,
  Code,
  Globe,
  Layout,
  Cpu,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ChangelogPage() {
  const releases = [
    {
      version: "2.0.1",
      date: "March 15, 2024",
      type: "major",
      icon: Rocket,
      title: "Performance Boost Update",
      description:
        "Major performance improvements and new features for a better development experience.",
      banner: "https://source.unsplash.com/random/1200x400?code",
      changes: [
        {
          type: "feature",
          icon: Sparkles,
          title: "New Component Library",
          description: "Introducing 20+ new components with modern design",
          details: [
            "Responsive layouts",
            "Dark mode support",
            "Accessibility improvements",
            "New animations",
          ],
        },
        {
          type: "improvement",
          icon: Zap,
          title: "Performance Optimization",
          description: "50% faster rendering and reduced bundle size",
          details: [
            "Improved code splitting",
            "Better tree shaking",
            "Optimized asset loading",
            "Reduced memory usage",
          ],
        },
        {
          type: "bugfix",
          icon: Bug,
          title: "Critical Fixes",
          description: "Resolved memory leaks and UI inconsistencies",
          details: [
            "Fixed memory leaks",
            "Resolved UI glitches",
            "Improved error handling",
            "Better type safety",
          ],
        },
      ],
      stats: [
        { label: "New Features", value: "20+" },
        { label: "Performance Gain", value: "50%" },
        { label: "Bug Fixes", value: "30+" },
        { label: "File Size", value: "-25%" },
      ],
    },
    {
      version: "1.9.0",
      date: "March 1, 2024",
      type: "minor",
      icon: GitPullRequest,
      title: "Developer Experience Update",
      description: "Enhanced developer tools and documentation improvements.",
      banner: "https://source.unsplash.com/random/1200x400?developer",
      changes: [
        {
          type: "feature",
          icon: GitBranch,
          title: "Advanced Theming",
          description: "New theming system with better customization",
          details: [
            "Custom color schemes",
            "Theme builder",
            "CSS variables support",
            "Real-time preview",
          ],
        },
        {
          type: "improvement",
          icon: GitCommit,
          title: "Documentation",
          description: "Expanded guides and API documentation",
          details: [
            "Interactive examples",
            "Better search",
            "Video tutorials",
            "API playground",
          ],
        },
      ],
      stats: [
        { label: "New Features", value: "10+" },
        { label: "Doc Pages", value: "100+" },
        { label: "Examples", value: "50+" },
        { label: "Contributors", value: "25+" },
      ],
    },
  ];

  const categories = [
    { icon: Rocket, label: "Features" },
    { icon: Zap, label: "Performance" },
    { icon: Bug, label: "Bug Fixes" },
    { icon: Shield, label: "Security" },
    { icon: Code, label: "Developer Tools" },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Changelog
          </h1>
          <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
            Keep track of updates and improvements to ModernUI. We're constantly
            working to make it better.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category) => (
              <Button
                key={category.label}
                variant="outline"
                className="border-purple-500/30 text-black hover:bg-purple-500/20 hover:text-purple-200"
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Latest Release Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-purple-900/30 border-purple-500/30">
            {/* Banner Image */}
            <div className="relative h-64">
              <img
                src={releases[0].banner}
                alt="Release banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">
                  Latest Release
                </span>
                <h2 className="text-3xl font-bold text-white mt-2">
                  v{releases[0].version} - {releases[0].title}
                </h2>
              </div>
            </div>

            <div className="p-8">
              {/* Stats Grid */}
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

              {/* Changes */}
              <div className="space-y-8">
                {releases[0].changes.map((change) => (
                  <div key={change.title} className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <change.icon className="w-6 h-6 text-purple-400 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold">
                          {change.title}
                        </h4>
                        <p className="text-purple-200/60">
                          {change.description}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-10">
                      {change.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-center space-x-2 text-purple-200/80"
                        >
                          <Check className="w-4 h-4 text-green-400" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Download v{releases[0].version}
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500 text-black hover:text-purple-200 hover:bg-purple-500/20"
                >
                  View Documentation
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Previous Releases */}
        <div className="space-y-8">
          {releases.slice(1).map((release, index) => (
            <motion.div
              key={release.version}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <release.icon className="w-8 h-8 text-purple-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        v{release.version}
                      </h3>
                      <p className="text-purple-200/60">{release.date}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      release.type === "major"
                        ? "bg-pink-500/20 text-pink-200"
                        : "bg-purple-500/20 text-purple-200"
                    }`}
                  >
                    {release.type === "major" ? "Major Release" : "Minor Release"}
                  </span>
                </div>
                <p className="text-purple-200/80 mb-6">{release.description}</p>
                <div className="space-y-4">
                  {release.changes.map((change) => (
                    <div
                      key={change.title}
                      className="flex items-start space-x-4"
                    >
                      <change.icon className="w-5 h-5 text-purple-400 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold">
                          {change.title}
                        </h4>
                        <p className="text-purple-200/60">
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