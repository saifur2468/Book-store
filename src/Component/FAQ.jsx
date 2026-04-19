import React from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How can I place an order?",
      answer: "Ordering is simple! Browse our collection, click the 'Buy Now' button on your favorite book, provide your shipping details, and complete the checkout process.",
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 2-3 business days within the city and 4-7 business days for regional areas. You will receive a tracking ID once your order is shipped.",
    },
    {
      question: "Do you offer Cash on Delivery (COD)?",
      answer: "Yes, we offer Cash on Delivery across the country. You can also pay securely via Credit/Debit cards or mobile banking.",
    },
    {
      question: "What is your return policy?",
      answer: "If you receive a damaged book or a misprint, please contact us within 3 days of delivery. We will arrange a free replacement for you immediately.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within the country. However, we are working on expanding our services to international book lovers very soon!",
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-primary/10 p-4 rounded-2xl">
              <HelpCircle className="w-10 h-10 text-primary" />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">Everything you need to know about our service</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="collapse collapse-plus bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <input type="radio" name="faq-accordion" defaultChecked={index === 0} /> 
              <div className="collapse-title text-xl font-bold text-gray-800 py-6 px-8">
                {faq.question}
              </div>
              <div className="collapse-content px-8"> 
                <p className="pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 text-base">
                   {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;