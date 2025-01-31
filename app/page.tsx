"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Download,
  Globe,
  Shield,
  Zap,
  Star,
  GitBranch,
  Terminal,
  Layout,
  Palette,
  Box,
  Cpu,
  Gauge,
  Layers,
  Workflow,
  Lightbulb,
  Puzzle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and performance",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Enterprise-grade security built-in",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Intuitive API and great documentation",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy worldwide in seconds",
    },
  ];

  const benefits = [
    {
      icon: Layout,
      title: "Responsive Design",
      description: "Perfectly adapts to any screen size",
    },
    {
      icon: Palette,
      title: "Customizable Themes",
      description: "Easily match your brand identity",
    },
    {
      icon: Box,
      title: "Reusable Components",
      description: "Build faster with pre-made elements",
    },
    {
      icon: Cpu,
      title: "Performance Optimized",
      description: "Blazing fast load times",
    },
    {
      icon: Gauge,
      title: "Real-time Updates",
      description: "Instant state management",
    },
    {
      icon: Layers,
      title: "Modern Architecture",
      description: "Built with latest technologies",
    },
  ];

  const stats = [
    { number: "10M+", label: "Downloads" },
    { number: "50K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  const techStack = [
    { icon: Terminal, name: "CLI Tools" },
    { icon: GitBranch, name: "Version Control" },
    { icon: Workflow, name: "Workflows" },
    { icon: Lightbulb, name: "Smart Defaults" },
    { icon: Puzzle, name: "Plugin System" },
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section with Animated Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-950 via-gray-900 to-black">
          <div className="absolute inset-0 opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Begin your journey with
              <span className="py-3 block bg-gradient-title text-transparent bg-clip-text tracking-wide">
                SynthLauncher
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-purple-200/80 mb-8 max-w-3xl mx-auto">
              A secure, modern Minecraft launcher with a sleek interface.
              Open-source, free, and built for the next generation of players.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg h-14 px-8 active:scale-95 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" /> Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 border-dashed border-2 bg-transparent text-white hover:text-purple-200 hover:bg-purple-500/20 text-lg h-14 px-8 active:scale-95 transition-all duration-300"
            >
              View Components
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-purple-200/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
              Everything you need to build modern web applications
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
                  <feature.icon className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-purple-200/80">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose
              <span className="py-3 bg-gradient-to-r from-purple-400 via-pink-600 to-orange-500 text-transparent bg-clip-text tracking-wide inline">
                {' '} SynthLauncher
              </span>
              ?
            </h2>
            <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
              Built with the latest technologies and best practices
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
                  <benefit.icon className="h-10 w-10 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-purple-200/80">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Tech Stack
            </h2>
            <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
              Built with modern technologies for modern development
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
                  <tech.icon className="h-8 w-8 text-purple-400 mb-3 mx-auto" />
                  <h3 className="text-lg font-semibold text-white">
                    {tech.name}
                  </h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Loved by Developers
            </h2>
            <p className="text-xl text-purple-200/80 max-w-2xl mx-auto">
              Join thousands of developers building amazing applications
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <Image
                      src={`/person${index}.png`}
                      alt="User"
                      className="rounded-full mr-4"
                      width={48}
                      height={48}
                    />
                    <div>
                      <h4 className="text-white font-semibold">
                        John Doe {index}
                      </h4>
                      <p className="text-purple-200/60">Senior Developer</p>
                    </div>
                  </div>
                  <p className="text-purple-200/80">
                    "ModernUI has revolutionized how we build our applications.
                    The components are beautiful and the documentation is
                    excellent."
                  </p>
                  <div className="flex items-center mt-4 text-yellow-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <Card className="p-12 bg-gradient-to-br from-purple-900/40 to-purple-800/40 border-purple-500/30 backdrop-blur-sm relative overflow-hidden bg-transparent border-2">
            <div className="absolute inset-0 opacity-40"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-purple-200/80 mb-8 max-w-2xl mx-auto">
                Join thousands of developers building amazing applications with
                ModernUI. Start building your next project today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/download">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg h-14 px-8 active:scale-95 transition-all duration-300"
                  >
                    Download Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500 bg-purple-100/10 hover:text-purple-200 hover:bg-purple-500/20 text-lg h-14 px-8 border-2 border-dashed text-white active:scale-95 transition-all duration-300"
                >
                  View Documentation
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
