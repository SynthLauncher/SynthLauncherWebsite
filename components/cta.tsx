import Link from "next/link";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <Card className="p-12 bg-gradient-to-br from-purple-900/40 to-purple-800/40 border-purple-500/30 backdrop-blur-sm relative overflow-hidden bg-transparent border-2">
      <div className="absolute inset-0 opacity-40"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-purple-200/80 mb-8 max-w-2xl mx-auto">
          Join thousands of players with SynthLauncher today!
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
  );
};

export default CTA;
