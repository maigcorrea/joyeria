import React from 'react';
import { motion } from 'framer-motion';

const MainSection = () => {
  return (
    <div className="min-h-[100dvh] relative bg-gray-50 p-8 z-10">
      <div className="mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 min-h-[calc(100dvh-2rem)] md:min-h-[calc(100dvh-4rem)] pt-[120px]">
          
          {/* Left Column - Text and Image */}
          <div className="lg:col-span-4 flex flex-col order-2 lg:order-1">
            {/* Top Text Block */}
            <div className="mb-6 md:mb-8 md:pr-8">
              <p className="text-sm text-gray-700 leading-relaxed font-light">
               Más allá del tiempo,<br />
               más allá del lujo.
              </p>
            </div>
            
            {/* Bottom Image */}
            <motion.div 
              className="aspect-[4/5] md:aspect-[3/4] lg:flex-1 relative bg-[url('../images/MonochromePearl.png')] bg-cover bg-center rounded-lg overflow-hidden "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
            </motion.div>
          </div>
          
          {/* Center Column - Main Typography */}
          <div className="lg:col-span-4 flex justify-center items-center relative z-20 order-1 lg:order-2">
            <div className="text-center">
              <h1 className="text-[60px] leading-[0.8] sm:text-[90px] lg:text-[120px] font-light tracking-wider text-zinc-800 drop-shadow-lg">
                <span className="">Élisée Jewerly</span>
              </h1>
            </div>
          </div>
          
          {/* Right Column - Images */}
          <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6 order-3 lg:order-3">
            {/* Top Right Image */}
            <motion.div 
              className="aspect-[4/3] md:aspect-[3/2] lg:flex-1 w-full lg:w-[50%] bg-[url('../images/main1.png')] bg-cover bg-center scale-105 rounded-lg relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.85, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
            </motion.div>
            
            {/* Bottom Right Section */}
            <div className="flex-1 flex flex-col min-h-[300px] lg:min-h-0">
              {/* Brands Count */}
              <div className="text-center mb-4 md:mb-6">
                <div className="text-4xl md:text-6xl font-light text-gray-400">+32</div>
                <div className="text-xs md:text-sm tracking-widest text-gray-600 uppercase">MARCAS</div>
              </div>
              
              {/* Bottom Image */}
              <motion.div 
                className="aspect-[4/3] lg:flex-1 rounded-lg relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Artistic representation of close-up portrait */}
                <div className="absolute inset-0 bg-[url('../images/ElegantHand.png')] bg-cover bg-center"></div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        
        
        {/* Subtle grid overlay - Hidden on mobile */}
        <div className="absolute inset-0 opacity-13 pointer-events-none z-[-2] hidden lg:block">
          <div className="grid grid-cols-12 gap-6 h-full">
            {Array.from({length: 12}).map((_, i) => (
              <div key={i} className="border-r border-gray-700"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;