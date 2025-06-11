import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MessageCircle, Shield, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white py-20 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-gradient-to-b from-indigo-100/50"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <MessageCircle className="h-8 w-8 text-indigo-600" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              QuickChat
            </h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience seamless communication with instant chat rooms. Create, share, and connect in seconds with enterprise-grade security.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/dashboard">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500">
                Start Chatting <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#features" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="relative rounded-md shadow-2xl ring-1 ring-gray-900/5">
              <div className="p-8 bg-white rounded-lg backdrop-blur-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-50 to-white rounded-lg">
                    <Zap className="h-10 w-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-semibold">Lightning Fast</h3>
                    <p className="text-sm text-gray-600 text-center mt-2">
                      Create chat rooms instantly with zero setup time
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-50 to-white rounded-lg">
                    <Shield className="h-10 w-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-semibold">Secure by Design</h3>
                    <p className="text-sm text-gray-600 text-center mt-2">
                      End-to-end encryption for all your conversations
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-50 to-white rounded-lg">
                    <MessageCircle className="h-10 w-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-semibold">Real-time Chat</h3>
                    <p className="text-sm text-gray-600 text-center mt-2">
                      Instant message delivery with live updates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}