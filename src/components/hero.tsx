
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-16 md:py-24">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Your AI-Powered</span>
            <span className="block bg-gradient-to-r from-unisphere-blue-600 to-unisphere-purple-600 bg-clip-text text-transparent">
              Academic Companion
            </span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            UniSphere leverages AI to elevate your university experience with personalized course recommendations, 
            career guidance, and smart study planning.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-gradient-to-r from-unisphere-blue-600 to-unisphere-purple-600 text-white">
              <Link to="/courses">
                Explore Courses
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 left-0 right-0 z-0 mx-auto h-72 w-72 animate-float rounded-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 blur-3xl"></div>
      <div className="absolute -top-24 right-0 z-0 h-72 w-72 animate-float rounded-full bg-gradient-to-r from-teal-200/30 to-blue-200/30 blur-3xl" style={{ animationDelay: "1s" }}></div>
      <div className="absolute -left-24 top-1/2 z-0 h-72 w-72 animate-float rounded-full bg-gradient-to-r from-orange-200/30 to-red-200/30 blur-3xl" style={{ animationDelay: "2s" }}></div>
    </div>
  );
}
