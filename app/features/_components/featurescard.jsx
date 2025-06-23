"use client"

"use client";
import React, { useEffect, useState } from "react";

function MainComponent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      title: "Dashboard Analytics",
      description:
        "Get a comprehensive view of your finances with real-time analytics and interactive charts.",
      icon: "fa-solid fa-chart-line",
      color: "bg-[#6366F1] dark:bg-[#818CF8]",
      textColor: "text-[#6366F1] dark:text-[#818CF8]",
    },
    {
      title: "Account Management",
      description:
        "Seamlessly manage multiple accounts and track your balances in one place.",
      icon: "fa-solid fa-wallet",
      color: "bg-[#EC4899] dark:bg-[#F472B6]",
      textColor: "text-[#EC4899] dark:text-[#F472B6]",
    },
    {
      title: "Transaction Tracking",
      description:
        "Monitor all your transactions with smart categorization and detailed insights.",
      icon: "fa-solid fa-receipt",
      color: "bg-[#10B981] dark:bg-[#34D399]",
      textColor: "text-[#10B981] dark:text-[#34D399]",
    },
    {
      title: "Budget Planning",
      description:
        "Set and track budgets with intelligent alerts and spending recommendations.",
      icon: "fa-solid fa-piggy-bank",
      color: "bg-[#F59E0B] dark:bg-[#FBBF24]",
      textColor: "text-[#F59E0B] dark:text-[#FBBF24]",
    },
    {
      title: "Receipt Scanner",
      description:
        "Instantly digitize receipts with our smart scanning technology and automatic categorization.",
      icon: "fa-solid fa-camera",
      color: "bg-[#8B5CF6] dark:bg-[#A78BFA]",
      textColor: "text-[#8B5CF6] dark:text-[#A78BFA]",
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg w-3/4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-lg w-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white font-inter mb-4">
          Powerful Features
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 font-inter mb-12">
          Everything you need to take control of your finances
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}
              >
                <i className={`${feature.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-inter mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-inter">
                {feature.description}
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