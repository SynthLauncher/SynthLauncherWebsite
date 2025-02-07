import { StatsProps } from "@/types/types";
import { motion } from "framer-motion";

const Stats = ({
  stats,
  className,
  innerClassName,
  gridClassName,
  numberClassName,
  labelClassName,
}: StatsProps) => {
  return (
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
  );
};

export default Stats;
