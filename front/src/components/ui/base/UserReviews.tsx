import React from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    content: "QuickChat has transformed how our team communicates. The instant setup and security features are exactly what we needed.",
    author: "Sarah Chen",
    role: "Engineering Lead",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    content: "The best chat platform we've used. Clean interface, reliable, and the team collaboration features are outstanding.",
    author: "Michael Rodriguez",
    role: "Project Manager",
    company: "InnovateLabs",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    content: "Security was our main concern, and QuickChat delivered. The end-to-end encryption gives us peace of mind.",
    author: "Emily Thompson",
    role: "Security Analyst",
    company: "SecureNet",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  }
];

export default function UserReviews() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by teams worldwide
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See what our users have to say about their experience with QuickChat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="p-8 bg-gradient-to-br from-gray-50 to-white">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-indigo-500 text-indigo-500" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "{review.content}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{review.author}</div>
                  <div className="text-sm text-gray-600">{review.role}</div>
                  <div className="text-sm text-indigo-600">{review.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex justify-center gap-8 sm:gap-12">
          {['TechCorp', 'InnovateLabs', 'SecureNet', 'GlobalTech', 'FutureWorks'].map((company) => (
            <div key={company} className="text-gray-400 text-sm font-semibold">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}