
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/hero";
import { CourseRecommendation } from "@/components/course-recommendation";
import { CareerMentor } from "@/components/career-mentor";
import { FeatureCard } from "@/components/feature-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Book, GraduationCap, Calendar, FileText, Users, Search } from "lucide-react";

const features = [
  {
    title: "Course Recommendations",
    description: "AI-driven course suggestions based on your academic profile, career goals, and learning preferences.",
    icon: Book,
    href: "/courses",
  },
  {
    title: "AI Career Mentor",
    description: "Personalized career guidance and job market analysis to help you make informed decisions.",
    icon: GraduationCap,
    href: "/career",
  },
  {
    title: "Smart Study Planner",
    description: "Optimize your study schedule with AI that adapts to your learning style and workload.",
    icon: Calendar,
    href: "/planner",
  },
  {
    title: "Resume Generator",
    description: "Create ATS-friendly resumes and cover letters tailored to specific job opportunities.",
    icon: FileText,
    href: "/resume",
  },
  {
    title: "Collaboration Hub",
    description: "Connect with fellow students and mentors for projects, study groups, and knowledge sharing.",
    icon: Users,
    href: "/collaborate",
  },
  {
    title: "Research Assistant",
    description: "Discover and summarize academic papers relevant to your field of study.",
    icon: Search,
    href: "/research",
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        
        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold">Your Academic Journey, Elevated</h2>
              <p className="mt-4 text-muted-foreground">
                UniSphere integrates AI technology with educational tools to enhance your university experience.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Course Recommendations */}
        <section className="bg-gray-50">
          <CourseRecommendation />
        </section>
        
        {/* Career Mentor */}
        <section className="bg-white">
          <CareerMentor />
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-unisphere-blue-600 to-unisphere-purple-600 py-16 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">Ready to Transform Your Academic Experience?</h2>
              <p className="mt-4 text-lg text-white/80">
                Join UniSphere today and gain access to AI-powered tools designed to help you succeed in your university journey.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-white text-unisphere-blue-600 hover:bg-gray-100">
                  <Link to="/signup">
                    Get Started Free
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
