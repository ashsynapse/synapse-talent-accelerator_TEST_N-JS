"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-screen">
      <MainHeader />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-synapse-lighter/30 to-synapse-light/50 px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Coming Soon Visual */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-synapse-primary mb-4 leading-none">
              Coming Soon
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-synapse-primary to-synapse-secondary mx-auto rounded-full"></div>
          </div>

          {/* Message */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
              Page Under Construction
            </h2>
            <p className="text-xl text-synapse-gray leading-relaxed">
              We're working hard to bring you something amazing. 
              In the meantime, explore our existing recruitment solutions and services.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <Button 
                className="bg-gradient-to-r from-synapse-primary to-synapse-secondary hover:from-synapse-secondary hover:to-synapse-primary text-white font-semibold text-lg py-6 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline"
              className="border-2 border-synapse-primary text-synapse-primary bg-white hover:bg-synapse-light text-lg py-6 px-8 rounded-xl transition-all duration-200 shadow-soft hover:shadow-medium"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}