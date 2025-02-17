"use client";

import { motion } from "framer-motion";
import { Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supportOptions } from "@/lib/data";

export default function SupportPage() {
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
            How Can We Help?
          </h1>
          <p className="text-xl text-sky-200/80 max-w-2xl mx-auto">
            Find the help you need through our support channels. We're here to
            assist you every step of the way.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8 bg-gradient-to-br from-sky-900/40 to-sky-800/40 border-sky-500/30 backdrop-blur-sm bg-transparent">
            <h2 className="text-2xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sky-200">
                  Name
                </Label>
                <Input
                  id="name"
                  className="bg-sky-900/30 border-sky-500/30 text-sky-200 placeholder:text-sky-400/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sky-200">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="bg-sky-900/30 border-sky-500/30 text-sky-200 placeholder:text-sky-400/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sky-200">
                  Message
                </Label>
                {/* TODO: Use ShadCN Text Area */}
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md bg-sky-900/30 border-sky-500/30 text-sky-200 placeholder:text-sky-400/50 focus:border-sky-500"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-sky-600 to-purple-600 ">
                <Mail className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Community Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-sky-900/40 to-sky-800/40 border-sky-500/30 backdrop-blur-sm bg-transparent">
            <Users className="w-12 h-12 text-sky-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-sky-200/80 mb-6 max-w-xl mx-auto">
              Connect with thousands of developers in our community. Share
              ideas, get help, and collaborate on projects.
            </p>
            <Button
              variant="outline"
              className="border-sky-500 border-2 text-white hover:text-sky-200 bg-sky-500/20 hover:bg-sky-600/30"
            >
              Join Discord
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
