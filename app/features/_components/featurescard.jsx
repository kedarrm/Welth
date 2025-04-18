"use client"

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const budgetData = [
  { name: "Used", value: 75 },
  { name: "Remaining", value: 25 }
];

const COLORS = ["#FF6B6B", "#4ECDC4"];

const transactionData = [
  { name: "Jan", expense: 400 },
  { name: "Feb", expense: 300 },
  { name: "Mar", expense: 500 },
  { name: "Apr", expense: 200 }
];

const Featurescard = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">WELTH - AI Finance Tracker</h1>

      {/* Dashboard */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Monthly Budget Tracker</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={budgetData} dataKey="value" outerRadius={80} label>
                {budgetData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Monthly Expenses Overview</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={transactionData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="expense" fill="#6366F1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>


      {/* Features */}
      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Email Authentication using Clerk with editable profile</li>
            <li>Dashboard with Pie & Bar Charts for budget and expense tracking</li>
            <li>Manage multiple accounts with default account support</li>
            <li>Add/Edit/Delete transactions with filters, pagination, and recurring options</li>
            <li>Scan receipts using Gemini AI to auto-fill transaction data</li>
            <li>Rate limiting (10 txns/hr) and bot detection using Arcjet</li>
            <li>Monthly AI-powered financial reports and budget alerts via email</li>
            <li>Background task scheduling using Cron jobs and Inngest</li>
          </ul>
          <Link href='/sign-in'>
            <Button className="mt-4 cursor-pointer">Login to Explore Features</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default Featurescard