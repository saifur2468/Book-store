import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";
const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Default");

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;

  const categories = ["All", "Fiction", "Story", "Science", "History", "Business"];

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = books;

    if (searchTerm) {
      result = result.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      result = result.filter((book) => book.category === selectedCategory);
    }

    if (sortBy === "LowToHigh") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "HighToLow") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    setFilteredBooks(result);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortBy, books]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  if (loading) return (
    <div className="flex h-96 items-center justify-center">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      
      {/* Search & Filter Header */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="relative w-full lg:w-1/3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by book name..."
              className="input input-bordered w-full pl-12 bg-gray-50 border-none focus:ring-2 focus:ring-primary/20"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  selectedCategory === cat 
                  ? "bg-primary text-white shadow-md shadow-primary/30" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <SlidersHorizontal className="text-gray-400 w-5 h-5" />
            <select 
              className="select select-bordered bg-gray-50 border-none font-semibold focus:ring-0"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Default">Sorting Book</option>
              <option value="LowToHigh">Price: Low to High</option>
              <option value="HighToLow">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Books Grid or Empty State */}
      <div className="min-h-[400px]">
        {currentBooks.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {currentBooks.map((book) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={book._id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img src={book.image} alt={book.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-lg font-bold">
                      ৳{book.price}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg line-clamp-1">{book.title}</h3>
                      <span className="flex items-center gap-1 text-orange-500 text-sm font-bold">
                        ★ {book.rating}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">by {book.author}</p>
                    <Link to={`/book/${book._id}`}>
  <button className="btn btn-primary mt-3 w-full">
    View Details
  </button>
</Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty State (Image Style) */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="relative mb-6">
              {/* Illustration matching your image */}
              <div className="w-48 h-48 bg-blue-50 rounded-full flex items-center justify-center relative">
                 <FileSearch size={80} className="text-blue-200" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border-4 border-blue-50">
                    <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                       ×
                    </div>
                 </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-red-500">
              No Books Found!
            </h3>
            <p className="text-gray-500 mt-2 max-w-xs mx-auto font-medium">
              We couldn't find any books matching your criteria. Please try another category or search term.
            </p>
            <button 
                onClick={() => {setSelectedCategory("All"); setSearchTerm("")}}
                className="mt-6 text-primary font-bold hover:underline"
            >
                Clear all filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && currentBooks.length > 0 && (
        <div className="flex justify-center mt-16 gap-2">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="btn btn-circle btn-outline btn-sm"
          >
            <ChevronLeft size={20} />
          </button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`btn btn-circle btn-sm ${currentPage === i + 1 ? "btn-primary" : "btn-ghost"}`}
            >
              {i + 1}
            </button>
          ))}

          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="btn btn-circle btn-outline btn-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

    </section>
  );
};

export default AllBooks;