"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { benefits, features, stats, techStack } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero bg-cover">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Begin your journey with
              <span className="py-3 block bg-gradient-to-l from-sky-400 to-purple-400 text-transparent bg-clip-text tracking-wide">
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
              className="bg-gradient-to-tr from-sky-500 to-purple-500  text-lg h-14 px-10 active:scale-95 transition-all duration-300 font-semibold"
            >
              <Download className="mr-2 h-5 w-5" /> Get Started
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-tr to-purple-500 from-cyan-500">
        <div className="max-w-7xl mx-auto ">
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
              Everything you need to start your Minecraft journey!
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
                <Card className="p-6 bg-sky-900/30 border-sky-500/30 backdrop-blur-sm hover:bg-sky-800/40 transition-all duration-300 border-2 h-44 lg:h-48">
                  <feature.icon className="h-12 w-12 text-sky-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sky-200/80">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-sky-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose
              <span className="py-3 bg-gradient-to-r from-purple-400  to-sky-500 text-transparent bg-clip-text tracking-wide inline">
                {" "}
                SynthLauncher
              </span>
              ?
            </h2>
            <p className="text-xl text-sky-200/80 max-w-2xl mx-auto">
              The new, game-changing launcher!
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
                <Card className="p-6 bg-sky-900/30 border-sky-500/30 backdrop-blur-sm hover:bg-sky-800/40 transition-all duration-300 border-2">
                  <benefit.icon className="h-10 w-10 text-sky-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sky-200/80">{benefit.description}</p>
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
          <Card className="p-12 bg-gradient-to-br from-sky-900/40 to-cyan-800/40 border-sky-500/30 backdrop-blur-sm relative overflow-hidden bg-transparent border-2">
            <div className="absolute inset-0 opacity-40"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-sky-200/80 mb-8 max-w-2xl mx-auto">
                Join thousands of players with SynthLauncher today!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/download">
                  <Button
                    size="lg"
                    className="bg-gradient-to-tr from-purple-600 to-sky-600  text-lg h-14 px-8 active:scale-95 transition-all duration-300"
                  >
                    Download Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
