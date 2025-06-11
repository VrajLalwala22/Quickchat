import React from "react";
import { Card } from "@/components/ui/card";
import { 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  Key, 
  Clock,
  MessageSquare,
  Link as LinkIcon,
  Smartphone
} from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-indigo-600" />,
      title: "Instant Setup",
      description: "Create and share chat rooms in seconds. No registration required for basic use."
    },
    {
      icon: <Shield className="h-6 w-6 text-indigo-600" />,
      title: "Enterprise Security",
      description: "End-to-end encryption and secure protocols to protect your conversations."
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Team Collaboration",
      description: "Perfect for team discussions, project coordination, and group chats."
    },
    {
      icon: <Globe className="h-6 w-6 text-indigo-600" />,
      title: "Global Access",
      description: "Connect with anyone, anywhere in the world with low-latency messaging."
    },
    {
      icon: <Key className="h-6 w-6 text-indigo-600" />,
      title: "Access Control",
      description: "Secure your rooms with passwords and manage participant access."
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-600" />,
      title: "Message History",
      description: "Access chat history and never lose important conversations."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-indigo-600" />,
      title: "Rich Messaging",
      description: "Support for text formatting, emojis, and file sharing."
    },
    {
      icon: <LinkIcon className="h-6 w-6 text-indigo-600" />,
      title: "Shareable Links",
      description: "Generate unique links to invite others to your chat rooms."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-indigo-600" />,
      title: "Mobile Ready",
      description: "Fully responsive design works seamlessly on all devices."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for seamless communication
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            QuickChat combines powerful features with simplicity to provide the best chat experience for teams and individuals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}