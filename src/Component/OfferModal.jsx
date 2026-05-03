import React, { useState, useEffect } from 'react';

const BookStormOffer = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Page load hobar 2 second por modal opn hobe
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      {/* Modal Container: Set the aspect ratio based on the image (4:3 is common for banners, 16:9 for landscape, check your generated image) */}
      <div className="relative w-full max-w-5xl rounded-lg overflow-hidden shadow-2xl transition-all scale-100 border border-gray-800">
        
        {/* The generated visual banner as background */}
        {/* Replace './path/to/image_3.png' with your actual image path */}
        <img 
          src="https://i.postimg.cc/vmSj7F4D/Gemini-Generated-Image-2fa8c92fa8c92fa8.png"
          alt="Book Storm Premium Offer" 
          className="w-full h-auto object-cover" 
        />

        {/* Close Button (Stylized top-right) */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition p-1 rounded-full bg-black/30"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Interactive Overlay (Optional): If you want clickable areas over the image */}
        <div className="absolute inset-0 z-0 bg-transparent flex flex-col justify-end p-8">
            <div className="flex justify-end gap-3">
                 <button 
                    onClick={() => setIsOpen(false)}
                    className="bg-black/40 hover:bg-black/70 text-white text-[12px] font-mono py-1.5 px-4 rounded transition"
                  >
                    CONTINUE SHOPPING
                  </button>
                  {/* Option: A 'Claim Now' button positioned where "ONLY FOR TODAY" is */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookStormOffer;



