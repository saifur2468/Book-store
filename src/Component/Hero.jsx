import React from "react";
import { ArrowRight, BookOpen, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-base-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <span className="badge badge-primary badge-outline px-4 py-3 mb-5">
            📚 #1 Online Book Store
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover Your Next
            <span className="text-primary"> Favorite Book</span>
          </h1>

          <p className="py-6 text-lg text-gray-500 max-w-xl">
            Explore thousands of bestselling books, timeless classics, and
            trending reads. Read more, learn more, and grow every day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary px-6">
              Browse Books <ArrowRight size={18} />
            </button>

            <button className="btn btn-outline px-6">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 flex-wrap">
            <div>
              <h3 className="text-2xl font-bold">10K+</h3>
              <p className="text-gray-500">Books Available</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">5K+</h3>
              <p className="text-gray-500">Happy Readers</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">4.9</h3>
              <p className="text-gray-500">Ratings</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center">
          <div className="bg-primary/10 rounded-3xl p-8 w-full max-w-md shadow-xl">
            <img
              src="https://i.postimg.cc/4416bkF6/912x-VKmu-Cs-L-UF1000-1000-QL80.jpg"
              alt="Books"
              className="w-full object-cover"
            />
          </div>

          {/* Floating Card 1 */}
          <div className="absolute top-10 -left-6 bg-base-100 shadow-lg rounded-xl p-4 flex items-center gap-3">
            <BookOpen className="text-primary" />
            <div>
              <h4 className="font-semibold">1000+ Authors</h4>
              <p className="text-sm text-gray-500">Worldwide Writers</p>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-10 -right-6 bg-base-100 shadow-lg rounded-xl p-4 flex items-center gap-3">
            <Star className="text-yellow-500 fill-yellow-500" />
            <div>
              <h4 className="font-semibold">Top Rated</h4>
              <p className="text-sm text-gray-500">Readers Choice</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;