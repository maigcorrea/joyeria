import React from 'react';

const MainSection = () => {
  return (
    <div className="min-h-screen relative bg-gray-50 p-8 z-10">
      <div className="mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-6 h-screen">
          
          {/* Left Column - Text and Image */}
          <div className="col-span-4 flex flex-col">
            {/* Top Text Block */}
            <div className="mb-8 pr-8">
              <p className="text-sm text-gray-700 leading-relaxed font-light">
                Cada joya guarda una historia única:<br/>
                la de un instante, un sentimiento, un recuerdo eterno.<br/>
                transformamos la belleza en símbolos<br/>
                que acompañan tu vida,<br/>
                porque una joya no es solo un accesorio,<br/>
                es un reflejo de lo que amas y de lo que eres.
              </p>
            </div>
            
            {/* Bottom Image */}
            <div className="flex-1 relative bg-[url('../images/ElegantPortrait.png')] bg-cover bg-center rounded-lg overflow-hidden">
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
              {/* Model with bag - artistic representation */}
              {/* <div className="absolute bottom-8 left-8 right-8">
                <div className="w-32 h-32 bg-gradient-to-br from-red-800 to-red-900 rounded-full mb-4 shadow-2xl transform rotate-12"></div>
                <div className="w-full h-32 bg-gradient-to-r from-black to-gray-800 rounded-lg shadow-xl transform -skew-x-3"></div>
              </div> */}
              {/* Artistic representation of reclining figure */}
              {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full"></div>
                <div className="w-48 h-16 bg-gradient-to-r from-black to-gray-700 rounded-full mt-4 transform -rotate-12"></div>
              </div> */}
              
            </div>
          </div>
          
          {/* Center Column - Main Typography */}
          <div className="col-span-4 flex justify-center items-center relative z-20">
            <div className="text-center ">
              <h1 className="text-[300px]/60 font-light tracking-wider  text-black drop-shadow-lg">
                <span className="">Élisée Jewerly</span>
              </h1>
            </div>
          </div>
          
          {/* Right Column - Images */}
          <div className="col-span-4 flex flex-col gap-6">
            {/* Top Right Image */}
            <div className="flex-1 w-[50%] bg-[url('../images/ElegantGold1.png')] bg-cover rounded-lg relative overflow-hidden">
              {/* Artistic representation of crouching figure */}
              {/* <div className="absolute bottom-8 right-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full mb-2"></div>
                <div className="w-32 h-48 bg-gradient-to-b from-red-700 to-red-900 rounded-lg shadow-xl"></div>
                <div className="w-24 h-12 bg-black rounded-lg mt-2 shadow-lg"></div>
              </div> */}
            </div>
            
            {/* Bottom Right Section */}
            <div className="flex-1 flex flex-col">
              {/* Brands Count */}
              <div className="text-center mb-6">
                <div className="text-6xl font-light text-gray-400">+32</div>
                <div className="text-sm tracking-widest text-gray-600 uppercase">MARCAS</div>
              </div>
              
              {/* Bottom Image */}
              <div className="flex-1 rounded-lg  relative overflow-hidden">
                {/* Artistic representation of close-up portrait */}
                <div className="absolute inset-0 bg-[url('../images/ElegantHand.png')] bg-cover bg-center"></div>
                {/* <div className="absolute bg-[url('../images/ElegantGemstoneEarrings.png')] top-1/3 left-1/2 transform -translate-x-1/2"> */}
                  {/* <div className="w-24 h-32 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full"></div>
                  <div className="w-32 h-6 bg-black rounded-lg mt-4 mx-auto"></div>
                  <div className="w-20 h-4 bg-red-600 rounded-sm mt-2 mx-auto"></div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-13 pointer-events-none z-[-2]">
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