"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Clock, Heart, Users } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Years of Experience",
      value: "15+",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Happy Customers",
      value: "10k+",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Awards Won",
      value: "25+",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Perfect Reviews",
      value: "1k+",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold mb-6">Meet Chef Sarah Laurent</h1>
              <p className="text-gray-600 mb-4">
                With over 15 years of experience in the art of pastry making, I bring the
                finest French techniques to create exquisite desserts that delight both
                the eye and the palate.
              </p>
              <p className="text-gray-600 mb-4">
                My journey began in Paris, where I trained at the renowned Le Cordon
                Bleu. Since then, I've worked in Michelin-starred restaurants across
                Europe before establishing Sweet Delights in New York.
              </p>
              <p className="text-gray-600">
                Every creation that leaves our kitchen is crafted with passion,
                precision, and the finest ingredients, ensuring an unforgettable
                experience for our customers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Chef Sarah Laurent"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-primary">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Sweet Delights, we believe in creating more than just pastries. We
              create moments of joy and unforgettable experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Ingredients",
                description:
                  "We source only the finest ingredients from trusted suppliers to ensure exceptional quality in every bite.",
              },
              {
                title: "Artisanal Craftsmanship",
                description:
                  "Each pastry is handcrafted with meticulous attention to detail and years of expertise.",
              },
              {
                title: "Innovation & Tradition",
                description:
                  "We blend classic techniques with modern creativity to create unique and memorable desserts.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}