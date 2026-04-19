import React, { useEffect, useState } from "react";

const TopratingBook = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/top-books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false); 
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-16 px-5 min-h-[600px]">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Top Rated <span className="text-primary">Books</span>
        </h2>
        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
      </div>

      {/* Loading Spinner Logic */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="mt-4 text-gray-500 animate-pulse font-medium">
            বইগুলো খোঁজা হচ্ছে...
          </p>
        </div>
      ) : (
        /* Books Grid */
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <div 
              key={book._id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-800 line-clamp-1 mb-1">
                  {book.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 italic">by {book.author}</p>

                <div className="flex justify-between items-center mt-auto">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Price</p>
                    <p className="text-xl font-bold text-gray-900">৳{book.price}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-lg">
                    <span className="text-orange-500 text-sm">★</span>
                    <span className="text-sm font-bold text-gray-700">{book.rating}</span>
                  </div>
                </div>

                <button className="w-full mt-5 bg-primary hover:bg-primary-focus text-white py-3 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Data State */}
      {!loading && books.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400">কোনো বই খুঁজে পাওয়া যায়নি।</p>
        </div>
      )}
    </div>
  );
};

export default TopratingBook;