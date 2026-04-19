import React from "react";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + (cartItems.length > 0 ? 60 : 0); // 60 tk delivery charge

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
        <div className="w-64 h-64 bg-gray-50 rounded-full flex items-center justify-center mb-8">
           <ShoppingBag size={80} className="text-gray-200" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Your cart is empty!</h2>
        <p className="text-gray-500 mt-2">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="btn btn-primary mt-8 px-8 rounded-xl font-bold">Explore Books</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-black mb-10 tracking-tight">SHOPPING CART</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* List of Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item._id} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <img src={item.image} className="w-28 h-40 object-cover rounded-2xl shadow-md" alt="" />
              
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-primary font-bold">৳{item.price}</p>
                
                <div className="flex items-center justify-center sm:justify-start gap-4 pt-2">
                  <div className="flex items-center bg-gray-100 rounded-xl p-1 px-3 gap-4">
                    <button onClick={() => updateQuantity(item._id, "dec")} className="p-1 hover:text-primary"><Minus size={16} /></button>
                    <span className="font-bold text-lg">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item._id, "inc")} className="p-1 hover:text-primary"><Plus size={16} /></button>
                  </div>
                  <button onClick={() => removeFromCart(item._id)} className="text-red-400 hover:text-red-600 transition-colors">
                    <Trash2 size={22} />
                  </button>
                </div>
              </div>

              <div className="text-right hidden sm:block">
                <p className="text-sm text-gray-400 font-medium uppercase">Subtotal</p>
                <p className="text-xl font-black text-gray-900">৳{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="bg-white text-black p-8 rounded-[2rem] h-fit sticky top-24 shadow-2xl shadow-gray-200">
          <h3 className="text-2xl font-bold mb-8">Order Summary</h3>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-black">
              <span>Items Subtotal</span>
              <span>৳{subtotal}</span>
            </div>
            <div className="flex justify-between text-black">
              <span>Estimated Delivery</span>
              <span>৳60</span>
            </div>
            <div className="border-t border-gray-800 pt-4 mt-4 flex justify-between text-2xl font-black">
              <span>Total Bill</span>
              <span className="text-primary">৳{total}</span>
            </div>
          </div>
          <button 
            onClick={() => Swal.fire("Ordered!", "Order placed successfully", "success")}
            className="btn btn-primary w-full btn-lg rounded-xl border-none font-black flex items-center gap-2 group"
          >
            CHECKOUT NOW <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;