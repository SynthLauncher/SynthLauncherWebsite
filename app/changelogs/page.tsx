"use client";

import { motion } from "framer-motion";
import {
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { changelogs } from "@/lib/data";

export default function ChangelogPage() {
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
            Changelogs
          </h1>
          <p className="text-xl text-sky-200/80 max-w-2xl mx-auto">
            Keep track of updates and improvements to ModernUI. We're constantly
            working to make it better.
          </p>
        </motion.div>

        {/* Latest Release Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="overflow-hidden bg-sky-900/30 border-sky-500/30">
            {/* Banner Image */}
            <div className="relative h-64">
              <Image
                src={changelogs[0].banner}
                alt="Release banner"
                width={0}
                height={0}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="px-3 py-1 bg-sky-500/50 text-sky-100 rounded-full text-sm">
                  Latest Release
                </span>
                <h2 className="text-3xl font-bold text-white mt-2">
                  v{changelogs[0].version} - {changelogs[0].title}
                </h2>
              </div>
            </div>

            <div className="p-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {changelogs[0].stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sky-200/60 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Changes */}
              <div className="space-y-8">
                {changelogs[0].changes.map((change) => (
                  <div key={change.title} className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <change.icon className="w-6 h-6 text-sky-400 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold">
                          {change.title}
                        </h4>
                        <p className="text-sky-200/60">
                          {change.description}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-10">
                      {change.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-center space-x-2 text-sky-200/80"
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
                <Button className="bg-gradient-to-r from-purple-600 to-sky-600">
                  Download v{changelogs[0].version}
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
