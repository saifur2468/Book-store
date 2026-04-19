import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, ShoppingCart, BookOpen, ShieldCheck } from "lucide-react";
import { CiHeart } from "react-icons/ci";
import Swal from 'sweetalert2';
import { useCart } from "../context/CartContext";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const { addToCart, addToWishlist } = useCart();

  useEffect(() => {
    fetch(`http://localhost:5000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  const handleAddToCart = () => {
    if (book) {
      addToCart(book); // ফিক্সড: পুরো অবজেক্ট পাস করা হয়েছে
      Swal.fire({
        title: 'Added!',
        text: `${book.title} added to cart`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      });
    }
  };

  const handleWishlist = () => {
    addToWishlist();
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Saved to Wishlist',
      showConfirmButton: false,
      timer: 2000
    });
  };

  if (!book) return <div className="h-screen flex items-center justify-center"><span className="loading loading-spinner loading-lg text-primary"></span></div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-5 py-12">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 mb-8 font-bold"><ArrowLeft size={20} /> Back</button>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-50 rounded-3xl p-8 flex justify-center"><img src={book.image} className="rounded-xl shadow-2xl h-[500px] object-cover" alt="" /></div>
        <div className="space-y-6">
          <span className="badge badge-primary badge-outline font-bold uppercase">{book.category}</span>
          <h1 className="text-5xl font-black text-gray-900">{book.title}</h1>
          <p className="text-xl text-gray-500 font-medium">By {book.author}</p>
          
          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl w-fit">
            <h2 className="text-3xl font-black text-primary">৳ {book.price}</h2>
            <div className="divider divider-horizontal"></div>
            <div className="flex items-center gap-1 text-orange-500 font-bold"><Star size={20} fill="orange" /> {book.rating}</div>
          </div>

          <p className="text-gray-600 leading-relaxed italic">{book.description}</p>

          <div className="flex gap-4 pt-6">
            <button onClick={handleAddToCart} className="flex-1 btn btn-primary btn-lg rounded-2xl shadow-xl shadow-primary/20 gap-3"><ShoppingCart /> Add to Cart</button>
            <button onClick={handleWishlist} className="btn btn-outline btn-lg rounded-2xl border-gray-200"><CiHeart size={24} /></button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookDetails;