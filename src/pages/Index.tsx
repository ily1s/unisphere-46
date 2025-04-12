
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/hero";
import { FeatureWidget } from "@/components/dashboard/feature-widget";
import { ProgressSnapshot } from "@/components/dashboard/progress-snapshot";
import { NotificationCenter } from "@/components/dashboard/notification-center";
import { SettingsPanel } from "@/components/dashboard/settings-panel";
import { AiAssistant } from "@/components/dashboard/ai-assistant";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useUser, UserAvatar } from "@/contexts/user-context";
import { Book, GraduationCap, Calendar, FileText, Users, Search } from "lucide-react";

const features = [
  {
    id: "courses",
    title: "Course Finder",
    description: "Discover perfect courses tailored to your goals and learning style.",
    icon: Book,
    href: "/courses",
  },
  {
    id: "career",
    title: "Career Compass",
    description: "Navigate your career path with AI-powered guidance and job insights.",
    icon: GraduationCap,
    href: "/career",
  },
  {
    id: "planner",
    title: "Smart Scheduler",
    description: "Maximize productivity with an AI study planner that adapts to your style.",
    icon: Calendar,
    href: "/planner",
  },
  {
    id: "resume",
    title: "Resume Builder",
    description: "Create standout, ATS-optimized resumes that get you noticed.",
    icon: FileText,
    href: "/resume",
  },
  {
    id: "collaborate",
    title: "Study Circle",
    description: "Connect with peers and mentors to accelerate your learning journey.",
    icon: Users,
    href: "/collaborate",
  },
  {
    id: "research",
    title: "Research Lens",
    description: "Find and digest relevant academic papers in minutes, not hours.",
    icon: Search,
    href: "/research",
  },
];

const Index = () => {
  const { user, isLoggedIn } = useUser();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {isLoggedIn && user ? (
          // Personalized dashboard for logged-in users
          <div className="bg-gradient-to-b from-unisphere-blue-50/50 py-8">
            <div className="container">
              {/* Personal greeting and controls */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <UserAvatar />
                  <div>
                    <h1 className="text-2xl font-bold">Welcome back, {user.name}</h1>
                    <p className="text-muted-foreground">Ready to continue your learning journey?</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <NotificationCenter />
                  <SettingsPanel />
                </div>
              </div>
              
              {/* Progress snapshot */}
              <div className="mb-8">
                <ProgressSnapshot />
              </div>
              
              {/* Context-aware recommendations */}
              {user.goals.length > 0 && (
                <div className="mb-6">
                  <h2 className="mb-4 text-lg font-semibold">Based on your goals</h2>
                  <div className="flex flex-wrap gap-2">
                    {user.goals.map((goal) => (
                      <Button 
                        key={goal} 
                        variant="outline" 
                        className="bg-white hover:bg-unisphere-blue-50"
                      >
                        {goal}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Customizable feature widgets */}
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Your Tools</h2>
                  <div className="text-sm text-muted-foreground">
                    Drag to resize or reorder
                  </div>
                </div>
                <FeatureWidget features={features} />
              </div>
            </div>
          </div>
        ) : (
          // Show the regular Hero section for non-logged in users
          <Hero />
        )}
        
        {/* Features Section - show to all users */}
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
                <Link key={feature.title} to={feature.href} className="block">
                  <div className="h-full">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-unisphere-blue-100">
                      <feature.icon className="h-6 w-6 text-unisphere-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
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
      
      {/* Floating AI Assistant for all users */}
      <AiAssistant />
    </div>
  );
};

export default Index;
