"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Apple, Check, Code, Download, FileDown, Folder, GitBranch, Globe, Heart, HelpCircle, HeartCrack, Lock, Mail, MessageCircle, Package, Rocket, Share2, Shield, Star, ThumbsUp, Users, AppWindow as Windows, Zap, Link as Linux } from "lucide-react";

export default function ComponentsShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-black p-8">
      <h1 className="text-4xl font-bold text-white mb-12 text-center">UI Components Showcase</h1>
      
      {/* Authentication Forms */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Authentication Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sign In Form */}
          <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Sign In</h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-purple-200">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-purple-200">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••"
                  className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
                />
              </div>
              <div className="flex items-center justify-between">
                <a href="#" className="text-sm text-purple-200 hover:text-purple-100">Forgot password?</a>
                <Button className="bg-purple-600 hover:bg-purple-700">Sign In</Button>
              </div>
            </form>
          </Card>

          {/* Sign Up Form */}
          <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Create Account</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-purple-200">First Name</Label>
                  <Input 
                    id="firstName" 
                    className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-purple-200">Last Name</Label>
                  <Input 
                    id="lastName" 
                    className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signupEmail" className="text-purple-200">Email</Label>
                <Input 
                  id="signupEmail" 
                  type="email"
                  className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signupPassword" className="text-purple-200">Password</Label>
                <Input 
                  id="signupPassword" 
                  type="password"
                  className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Create Account
              </Button>
            </form>
          </Card>

          {/* Password Reset Form */}
          <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4">Reset Password</h3>
            <p className="text-purple-200/80 mb-4">Enter your email to receive password reset instructions.</p>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="resetEmail" className="text-purple-200">Email</Label>
                <Input 
                  id="resetEmail" 
                  type="email"
                  className="bg-purple-900/30 border-purple-500/30 text-purple-200 placeholder:text-purple-400/50"
                />
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Send Reset Link
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Enhanced Download Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Download Components</h2>
        
        {/* Platform-specific Downloads */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Windows, name: 'Windows', size: '120MB', type: '.exe' },
            { icon: Apple, name: 'macOS', size: '115MB', type: '.dmg' },
            { icon: Linux, name: 'Linux', size: '110MB', type: '.AppImage' }
          ].map((platform) => (
            <motion.div
              key={platform.name}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
                <platform.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
                <p className="text-purple-200/80 mb-4">Version 2.0.1</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-200/60">{platform.size}</span>
                  <span className="text-purple-200/60">{platform.type}</span>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Download className="w-4 h-4 mr-2" /> Download
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Downloads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-800/40 border-purple-500/30 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Enterprise Edition</h3>
                </div>
                <p className="text-purple-200/80 mb-4">Complete solution with advanced features</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-purple-200">
                    <Check className="w-4 h-4 mr-2 text-green-400" /> Priority Support
                  </li>
                  <li className="flex items-center text-purple-200">
                    <Check className="w-4 h-4 mr-2 text-green-400" /> Advanced Security
                  </li>
                  <li className="flex items-center text-purple-200">
                    <Check className="w-4 h-4 mr-2 text-green-400" /> Custom Integrations
                  </li>
                </ul>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Get Started
              </Button>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-purple-900/40 to-purple-800/40 border-purple-500/30 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Rocket className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Developer Edition</h3>
                </div>
                <p className="text-purple-200/80 mb-4">Perfect for individual developers</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-purple-200">
                    <Check className="w-4 h-4 mr-2 text-green-400" /> Developer Tools
                  </li>
                  <li className="flex items-center text-purple-200">
                    <Check className="w-4 h-4 mr-2 text-green-400" /> API Access
                  </li>
                  <li className="flex items-center text-purple-200">
                    <Check className="w-4 h-4 mr-2 text-green-400" /> Community Support
                  </li>
                </ul>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Download Free
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Enhanced Button Showcase */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Button Variations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700 w-full">
            Primary
          </Button>
          
          <Button variant="outline" className="border-purple-500 text-purple-200 hover:bg-purple-800 w-full">
            Outline
          </Button>
          
          <Button variant="ghost" className="text-purple-200 hover:bg-purple-800/50 w-full">
            Ghost
          </Button>
          
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full">
            Gradient
          </Button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-lg bg-purple-600/20 text-purple-200 border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300 w-full"
          >
            Animated
          </motion.button>
          
          <Button className="bg-purple-900/50 hover:bg-purple-800 border border-purple-500/30 w-full">
            <Star className="mr-2 h-4 w-4" /> With Icon
          </Button>
          
          <Button variant="outline" className="border-2 border-purple-500 text-purple-200 hover:bg-purple-800/50 w-full">
            Thick Border
          </Button>
          
          <Button className="bg-transparent hover:bg-purple-800/30 border border-purple-500/30 text-purple-200 w-full">
            Transparent
          </Button>

          <Button className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 w-full">
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>

          <Button className="bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 w-full">
            Premium
          </Button>

          <Button className="bg-purple-900 hover:bg-purple-800 text-purple-200 ring-2 ring-purple-500/50 w-full">
            Ringed
          </Button>

          <Button className="bg-purple-600/20 hover:bg-purple-600/30 backdrop-blur-sm w-full">
            Glass
          </Button>
        </div>
      </section>

      {/* Support Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Support Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
              <HelpCircle className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Documentation</h3>
              <p className="text-purple-200/80 mb-4">Comprehensive guides and API references</p>
              <Button variant="ghost" className="text-purple-200 hover:bg-purple-800/50 w-full">
                View Docs
              </Button>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Community Forum</h3>
              <p className="text-purple-200/80 mb-4">Connect with other developers</p>
              <Button variant="ghost" className="text-purple-200 hover:bg-purple-800/50 w-full">
                Join Discussion
              </Button>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
              <HeartCrack className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Issue Tracker</h3>
              <p className="text-purple-200/80 mb-4">Report bugs and request features</p>
              <Button variant="ghost" className="text-purple-200 hover:bg-purple-800/50 w-full">
                Submit Issue
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Post Cards */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Blog Components</h2>
        <div className="grid grid-cols-1 gap-8">
          {/* Featured Blog Post */}
          <Card className="overflow-hidden bg-purple-900/30 border-purple-500/30">
            <div className="relative">
              <img
                src="https://source.unsplash.com/random/1200x400?technology"
                alt="Featured post"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm text-purple-200 rounded-full text-sm">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-purple-200/60">March 15, 2024</span>
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center text-purple-200/60 hover:text-purple-200"
                  >
                    <Heart className="w-5 h-5 mr-1" /> 
                    <span>2.1k</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center text-purple-200/60 hover:text-purple-200"
                  >
                    <Share2 className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                The Future of Web Development
              </h3>
              <p className="text-purple-200/80 mb-4">
                Exploring the latest trends and technologies shaping the future of web development.
                From AI-powered tools to revolutionary frameworks.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://source.unsplash.com/random/40x40?portrait"
                    alt="Author"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-medium">Sarah Johnson</p>
                    <p className="text-purple-200/60 text-sm">Lead Developer</p>
                  </div>
                </div>
                <Button variant="outline" className="border-purple-500 text-purple-200 hover:bg-purple-800">
                  Read More
                </Button>
              </div>
            </div>
          </Card>

          {/* Regular Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <Card key={item} className="overflow-hidden bg-purple-900/30 border-purple-500/30">
                <img
                  src={`https://source.unsplash.com/random/600x300?coding${item}`}
                  alt={`Blog post ${item}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-purple-200/60">March ${10 + item}, 2024</span>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-purple-200/60 hover:text-purple-200">
                        <Heart className="w-4 h-4 mr-1" /> 
                        <span>${1.2 + item}k</span>
                      </button>
                      <button className="text-purple-200/60 hover:text-purple-200">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item === 1 ? "Building Scalable Applications" : "Modern CSS Techniques"}
                  </h3>
                  <p className="text-purple-200/80 mb-4">
                    {item === 1 
                      ? "Learn the best practices for building large-scale applications that can handle millions of users."
                      : "Discover the latest CSS features and techniques for creating stunning user interfaces."}
                  </p>
                  <Button variant="ghost" className="text-purple-200 hover:bg-purple-800/50 w-full">
                    Read Article
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Info Cards Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Feature Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
              <Rocket className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-purple-200/80">Get up and running with our platform in minutes.</p>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
              <Shield className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
              <p className="text-purple-200/80">Enterprise-grade security out of the box.</p>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-800/40 transition-all duration-300">
              <Zap className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-purple-200/80">Optimized for speed and performance.</p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Sliding Cards Section */}
      <section className="mb-16 overflow-hidden">
        <h2 className="text-2xl font-semibold text-white mb-6">Sliding Cards</h2>
        <motion.div 
          className="flex space-x-6 pb-4"
          drag="x"
          dragConstraints={{ right: 0, left: -1200 }}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <motion.div
              key={item}
              className="flex-shrink-0 w-80"
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-6 bg-gradient-to-br from-purple-800/40 to-purple-900/40 border-purple-500/30 backdrop-blur-sm">
                <img
                  src={`https://source.unsplash.com/random/400x200?tech&sig=${item}`}
                  alt="Card image"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-2">Feature {item}</h3>
                <p className="text-purple-200/80">Drag to explore more features and content.</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Changelog Cards */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Changelog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden bg-purple-900/30 border-purple-500/30">
            <img
              src="https://source.unsplash.com/random/800x400?code"
              alt="Update banner"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm mb-4">
                New Feature
              </span>
              <h3 className="text-xl font-semibold text-white mb-2">
                Enhanced Developer Experience
              </h3>
              <p className="text-purple-200/80">
                Introducing new developer tools and improved documentation.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden bg-purple-900/30 border-purple-500/30">
            <img
              src="https://source.unsplash.com/random/800x400?developer"
              alt="Update banner"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm mb-4">
                Performance
              </span>
              <h3 className="text-xl font-semibold text-white mb-2">
                Speed Optimizations
              </h3>
              <p className="text-purple-200/80">
                Major performance improvements across the platform.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Interactive Feature Cards */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Interactive Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group relative"
          >
            <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
              <Code className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Source Code</h3>
              <p className="text-purple-200/80">Explore our codebase</p>
              
              {/* Hover Content */}
              <div className="absolute inset-0 bg-purple-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-6">
                <div className="space-y-2">
                  <div className="flex items-center text-purple-200">
                    <Folder className="w-5 h-5 mr-2" /> 
                    <span>📦 /src</span>
                  </div>
                  <div className="flex items-center text-purple-200 ml-4">
                    <Folder className="w-5 h-5 mr-2" /> 
                    <span>🎨 /components</span>
                  </div>
                  <div className="flex items-center text-purple-200 ml-4">
                    <Folder className="w-5 h-5 mr-2" /> 
                    <span>🛠️ /utils</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group relative"
          >
            <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
              <Globe className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">API Access</h3>
              <p className="text-purple-200/80">Connect with our API</p>
              
              {/* Hover Content */}
              <div className="absolute inset-0 bg-purple-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-6">
                <div className="space-y-3 text-purple-200">
                  <div>🔑 REST API</div>
                  <div>⚡ WebSocket</div>
                  <div>📊 GraphQL</div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group relative"
          >
            <Card className="p-6 bg-purple-900/30 border-purple-500/30 backdrop-blur-sm">
              <Package className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Packages</h3>
              <p className="text-purple-200/80">Techstack</p>
              <p className="text-purple-200/80">Explore our packages</p>
              
              {/* Hover Content */}
              <div className="absolute inset-0 bg-purple-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-6">
                <div className="space-y-3 text-purple-200">
                  <div>📦 Core Package</div>
                  <div>🔌 Plugins</div>
                  <div>🎨 Themes</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}