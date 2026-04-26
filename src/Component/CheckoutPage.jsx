import React, { useState } from 'react';
import Swal from "sweetalert2";


import bikash from "../assets/download.png"
import rocket from "../assets/Rocket_mobile_banking_logo.svg.png"
import upay from "../assets/unnamed.png"

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePaymentChange = (e) => {
    const value = e.target.value;
    setPaymentMethod(value);
    if (value === 'online') {
      setIsModalOpen(true);
    }
  };

  const handleOrderConfirm = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Ordered!",
      text: `Order placed successfully with ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}`,
      icon: "success",
      confirmButtonColor: "#EA580C", 
    });
  };

 
  const selectOnlinePayment = (provider) => {
    
    Swal.fire("Redirecting...", `Connecting to ${provider} secure payment gateway.`, "info");
    setIsModalOpen(false); 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        
        {/* Header Section */}
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-orange-600 p-1 rounded">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h11a1 1 0 100-2H3zM3 11a1 1 0 100-2h11a1 1 0 100-2H3zM13 15a1 1 0 110 2H3a1 1 0 110-2h10z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-gray-800">Shipping & Billing</h2>
        </div>

        {/* Form Grid */}
        <form onSubmit={handleOrderConfirm} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-bold mb-1 text-gray-700">First Name</label>
              <input type="text" required placeholder="First Name*" className="border p-2 rounded w-full focus:ring-1 focus:ring-orange-500 outline-none" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold mb-1 text-gray-700">Last Name</label>
              <input type="text" required placeholder="Last Name*" className="border p-2 rounded w-full focus:ring-1 focus:ring-orange-500 outline-none" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-bold mb-1 text-gray-700">Address</label>
            <input type="text" required placeholder="Address*" className="border p-2 rounded w-full focus:ring-1 focus:ring-orange-500 outline-none" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-bold mb-1 text-gray-700">Upazila/Thana</label>
              <input type="text" required placeholder="Upazila/Thana*" className="border p-2 rounded w-full focus:ring-1 focus:ring-orange-500 outline-none" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold mb-1 text-gray-700">District</label>
              <select className="border p-2 rounded w-full focus:ring-1 focus:ring-orange-500 outline-none bg-white">
                <option>Dhaka - City</option>
                <option>Chittagong</option>
                <option>Sylhet</option>
                <option>Rajshahi</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-bold mb-1 text-gray-700">Mobile</label>
              <input type="text" required placeholder="Telephone*" className="border p-2 rounded w-full focus:ring-1 focus:ring-orange-500 outline-none" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold mb-1 text-gray-700">Email</label>
              <input type="email" required placeholder="E-Mail*" className="border p-2 rounded w-full focus:ring-1 focus:ring-orange-500 outline-none" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-bold mb-1 text-gray-700">Comment</label>
            <textarea placeholder="Any special requirement/instruction for us?" rows="4" className="border p-2 rounded w-full focus:ring-1 focus:ring-orange-500 outline-none"></textarea>
          </div>

          {/* Payment Selection Section */}
          <div className="mt-8 border-t pt-6">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Payment Method</h3>
            <div className="space-y-3 mb-6">
              <label className={`flex items-center space-x-3 cursor-pointer p-4 border rounded-xl transition ${paymentMethod === 'cod' ? 'border-orange-500 bg-orange-50' : 'hover:bg-gray-50'}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="cod" 
                  checked={paymentMethod === 'cod'} 
                  onChange={handlePaymentChange}
                  className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                />
                <span className="font-medium text-gray-700">Cash on Delivery</span>
              </label>

              <label className={`flex items-center space-x-3 cursor-pointer p-4 border rounded-xl transition ${paymentMethod === 'online' ? 'border-orange-500 bg-orange-50' : 'hover:bg-gray-50'}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="online" 
                  checked={paymentMethod === 'online'} 
                  onChange={handlePaymentChange}
                  className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                />
                <span className="font-medium text-gray-700">Online Payment (bKash/Rocket/upay)</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-10 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all shadow-md flex items-center justify-center mx-auto uppercase tracking-wide"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>

      {/* Online Payment Modal - Redesigned */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-4 border-b flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-gray-800">Choose Online Payment</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-800 text-2xl font-light p-1">×</button>
            </div>
            
            {/* Payment Provider Grid */}
            <div className="p-6 grid grid-cols-1 gap-4">
              
              {/* bKash */}
              <button 
                onClick={() => selectOnlinePayment('bKash')} 
                className="flex items-center justify-between p-4 border-2 border-gray-100 rounded-xl hover:border-pink-500 hover:bg-pink-50 transition-all group"
              >
                <span className="font-bold text-pink-600 text-lg">bKash</span>
                <img src={bikash} alt="bKash" className="h-10 w-auto object-contain" />
              </button>
              
              {/* Rocket */}
              <button 
                onClick={() => selectOnlinePayment('Rocket')} 
                className="flex items-center justify-between p-4 border-2 border-gray-100 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all group"
              >
                <span className="font-bold text-purple-700 text-lg">Rocket</span>
                <img src={rocket} alt="Rocket" className="h-10 w-auto object-contain" />
              </button>
              
              {/* upay */}
              <button 
                onClick={() => selectOnlinePayment('upay')} 
                className="flex items-center justify-between p-4 border-2 border-gray-100 rounded-xl hover:border-amber-500 hover:bg-amber-50 transition-all group"
              >
                <span className="font-bold text-amber-600 text-lg">upay</span>
                <img src={upay} alt="upay" className="h-10 w-auto object-contain" />
              </button>
            </div>

            <div className="p-4 bg-gray-50 flex flex-col gap-2">
              <p className="text-xs text-gray-500 text-center mb-2">Transaction is secured and encrypted</p>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-full py-2.5 bg-gray-200 rounded-lg font-bold text-gray-700 hover:bg-gray-300 transition"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;