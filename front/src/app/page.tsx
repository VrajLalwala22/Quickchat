import FeatureSection from "@/components/ui/base/FeatureSection";
import Footer from "@/components/ui/base/Footer";
import HeroSection from "@/components/ui/base/HeroSection";
import Navbar from "@/components/ui/base/Navbar";
import UserReviews from "@/components/ui/base/UserReviews";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth";
import { ChatGroupType } from "../../types";
import { fetchChatGroups } from "@/fetch/groupFetch";

export default async function Home() {
  const session: CustomSession | null = await getServerSession(authOptions);

  
  return (
    <div className="min-h-screen flex flex-col ">
    {/* Header */}
    <Navbar user={session?.user} />
    {/* Hero Section */}
    <HeroSection />

    {/* Features Section */}
    <FeatureSection />

    {/* User Reviews Section */}
    <UserReviews />

    {/* Footer */}
    <Footer />
  </div>
  );
}
