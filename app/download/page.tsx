"use client";

import { motion } from "framer-motion";
import {
  Apple,
  Check,
  Download,
  FileDown,
  Link as Linux,
  Package,
  Rocket,
  Shield,
  AppWindow as Windows,
  Terminal,
  Code,
  Cpu,
  Layers,
  GitBranch,
  Globe,
  Zap,
  Star,
  Users,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DownloadPage() {
  const platforms = [
    {
      icon: Windows,
      name: "Windows",
      size: "120MB",
      type: ".exe",
      requirements: "Windows 10 or later",
      features: ["Auto-updates", "Native performance", "Windows integration"],
    },
    {
      icon: Apple,
      name: "macOS",
      size: "115MB",
      type: ".dmg",
      requirements: "macOS 11 or later",
      features: ["Apple Silicon support", "Universal binary", "Touch Bar support"],
    },
    {
      icon: Linux,
      name: "Linux",
      size: "110MB",
      type: ".AppImage",
      requirements: "Most distributions",
      features: ["AppImage format", "No dependencies", "Portable"],
    },
  ];

  const features = [
    {
      icon: Terminal,
      title: "CLI Tools",
      description: "Powerful command-line interface for automation",
    },
    {
      icon: Code,
      title: "Developer Tools",
      description: "Built-in debugging and profiling tools",
    },
    {
      icon: Cpu,
      title: "Performance",
      description: "Optimized for maximum efficiency",
    },
    {
      icon: Layers,
      title: "Extensions",
      description: "Rich ecosystem of plugins and extensions",
    },
  ];

  const stats = [
    { number: "1M+", label: "Downloads" },
    { number: "99.9%", label: "Uptime" },
    { number: "50K+", label: "Active Users" },
    { number: "4.9/5", label: "Rating" },
  ];

  const enterpriseFeatures = [
    "Priority Support",
    "Custom Integrations",
    "Advanced Security",
    "Team Management",
    "Audit Logs",
    "SLA Guarantee",
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
            Download ModernUI
          </h1>
          <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
            Choose your platform and get started with ModernUI today. All versions
            come with our full suite of features and regular updates.
          </p>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm text-center">
              <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-purple-200/80">{stat.label}</p>
            </Card>
          ))}
        </motion.div> */}

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-8 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
                <platform.icon className="w-12 h-12 text-purple-400 mb-6" />
                <h2 className="text-2xl font-bold text-white mb-2">
                  {platform.name}
                </h2>
                <p className="text-purple-200/80 mb-4">Version 2.0.1</p>
                <div className="flex justify-between items-center text-purple-200/60 mb-6">
                  <span>{platform.size}</span>
                  <span>{platform.type}</span>
                </div>
                <div className="space-y-3 mb-6">
                  {platform.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-purple-200/80">
                      <Check className="w-4 h-4 mr-2 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <p className="text-purple-200/60 text-sm mb-6">
                  {platform.requirements}
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
                <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-purple-200/80">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div> */}

        {/* Enterprise Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-800/40 border-purple-500/30 backdrop-blur-sm h-full bg-transparent">
              <Shield className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">
                Enterprise Edition
              </h3>
              <ul className="space-y-3 mb-6">
                {enterpriseFeatures.map((feature) => (
                  <li key={feature} className="flex items-center text-purple-200">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <Package className="mr-2 h-4 w-4" /> Contact Sales
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-800/40 border-purple-500/30 backdrop-blur-sm h-full bg-transparent">
              <Rocket className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">
                Developer Edition
              </h3>
              <p className="text-purple-200/80 mb-6">
                Get access to developer tools, API documentation, and early access
                to new features.
              </p>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full border-purple-500 text-black hover:text-purple-200 hover:bg-purple-500/20"
                >
                  <FileDown className="mr-2 h-4 w-4" /> Download SDK
                </Button>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  View Documentation
                </Button>
              </div>
            </Card>
          </motion.div>
        </div> */}

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-800/40 border-purple-500/30 backdrop-blur-sm bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Lock className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Secure by Default</h4>
                <p className="text-purple-200/80">Built-in security features to protect your data</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Enterprise Ready</h4>
                <p className="text-purple-200/80">Compliant with industry standards</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Team Management</h4>
                <p className="text-purple-200/80">Advanced user roles and permissions</p>
              </div>
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
            <h3 className="text-2xl font-bold text-white mb-6">System Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Windows</h4>
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