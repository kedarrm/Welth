"use client";

import React, { useEffect, useState } from 'react'


function MainComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      rating: 5,
      quote:
        "Welth Finance transformed how I manage my business finances. The dashboard analytics are incredibly intuitive, and the AI insights have helped me make better financial decisions.",
    },
    {
      name: "Michael Chen",
      role: "Freelance Developer",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
      quote:
        "The automated expense tracking and categorization have saved me countless hours. It's like having a personal financial advisor in my pocket.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 4,
      quote:
        "I've tried many financial management tools, but Welth Finance stands out with its security features and user-friendly interface. It's become an essential part of my daily routine.",
    },
    {
      name: "David Thompson",
      role: "Restaurant Owner",
      image: "https://randomuser.me/api/portraits/women/74.jpg",
      rating: 5,
      quote:
        "The receipt scanning feature is a game-changer for my business. I can easily track expenses and generate reports for tax season without any hassle.",
    },
    {
      name: "Lisa Parker",
      role: "Financial Advisor",
      image: "https://randomuser.me/api/portraits/women/74.jpg",
      rating: 5,
      quote:
        "As a financial professional, I'm impressed by the depth of analytics and security measures. I recommend Welth Finance to all my clients.",
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-800 rounded-lg w-3/4"></div>
            <div className="h-6 bg-gray-800 rounded-lg w-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-64 bg-gray-800 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white font-inter mb-4">
          Customer Success Stories
        </h1>
        <p className="text-xl text-gray-300 font-inter mb-12">
          See what our users are saying about their experience with Welth
          Finance
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile picture`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-inter">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 font-inter">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i
                    key={i}
                    className="fa-solid fa-star text-yellow-400 mr-1"
                  ></i>
                ))}
              </div>
              <p className="text-gray-300 font-inter italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;