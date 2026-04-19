import React from "react";
import { motion } from "framer-motion";
import { BookOpenText } from "lucide-react";

const publications = [
  { id: 1, name: "Penguin Books", logo: "https://i.postimg.cc/kG1N9Kkc/1662265024889.jpg" },
  { id: 2, name: "HarperCollins", logo: "https://i.postimg.cc/kG1N9Kkc/1662265024889.jpg" },
  { id: 3, name: "Pan Macmillan", logo: "https://i.postimg.cc/kG1N9Kkc/1662265024889.jpg" },
  { id: 4, name: "Oxford Press", logo: "https://i.postimg.cc/kG1N9Kkc/1662265024889.jpg" },
  { id: 5, name: "Simon & Schuster", logo: "https://i.postimg.cc/kG1N9Kkc/1662265024889.jpg" },
  { id: 6, name: "Pearson", logo: "https://i.postimg.cc/kG1N9Kkc/1662265024889.jpg" },
];

const TopPublication = () => {

  const duplicatedPublications = [...publications, ...publications];

  return (
    <div className="py-20 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-5 mb-12 flex items-center justify-center gap-3">
        <BookOpenText className="text-primary w-8 h-8" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          Top <span className="text-primary">Publications</span>
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex">
        <motion.div
          className="flex flex-nowrap gap-12 items-center"
          animate={{
            x: ["0%", "-50%"], // অর্ধেক পর্যন্ত গেলে আবার শুরুতে ফিরে আসবে
          }}
          transition={{
            ease: "linear",
            duration: 20, // স্পিড কন্ট্রোল (বেশি দিলে স্লো হবে)
            repeat: Infinity,
          }}
        >
          {duplicatedPublications.map((pub, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gray-50 px-8 py-4 rounded-2xl border border-gray-100 shadow-sm hover:border-primary/30 transition-colors min-w-[250px]"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner">
             
                <img 
                  src={pub.logo} 
                  alt={pub.name} 
                  className="w-8 h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => e.target.src = "https://via.placeholder.com/50"} 
                />
              </div>
              <span className="text-lg font-semibold text-gray-700 whitespace-nowrap">
                {pub.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

  
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default TopPublication;