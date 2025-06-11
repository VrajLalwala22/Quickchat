"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function CartPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      {/* Cart items would go here */}
      <div className="space-y-4">
        <div className="border p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold">Sample Cart Item</h3>
          <p className="text-gray-600">Description of the item</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="font-medium">$99.99</span>
            <Link href="/chat/group-123">
              <Button variant="secondary">
                Open Chat
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Chat Access */}
      <div className="mt-8 p-4 border rounded-lg bg-gray-50">
        <h2 className="text-lg font-semibold mb-3">Quick Chat Access</h2>
        <div className="flex gap-3">
          <Link href="/chat/support">
            <Button variant="default">
              Customer Support Chat
            </Button>
          </Link>
          <Link href="/chat/sales">
            <Button variant="outline">
              Sales Chat
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 