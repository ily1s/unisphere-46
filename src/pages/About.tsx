
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-b from-unisphere-teal-50 to-white py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold">About UniSphere</h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Our mission, vision, and the technology powering UniSphere.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  UniSphere was created with a clear purpose: to empower university students by combining AI technology 
                  with educational resources, creating a comprehensive ecosystem that enhances the academic journey and 
                  prepares students for successful careers.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe that every student deserves access to personalized guidance, relevant resources, and 
                  connections that can help them maximize their university experience and transition confidently into 
                  their professional lives.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 blur-3xl"></div>
                  <Card className="relative z-10 overflow-hidden border-none shadow-xl">
                    <CardContent className="flex flex-col items-center justify-center p-12">
                      <GraduationCap className="h-24 w-24 text-unisphere-purple-600 mb-6" />
                      <blockquote className="text-center italic text-xl">
                        "Empowering students through the integration of AI and education."
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Technology</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">AI Core</h3>
                  <p className="text-muted-foreground">
                    Our platform is built on advanced AI models that analyze student data, academic patterns, 
                    and career trends to provide personalized recommendations and insights.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">AWS Data Engineering</h3>
                  <p className="text-muted-foreground">
                    UniSphere leverages AWS infrastructure for robust data processing, storage, and analysis, 
                    ensuring secure and scalable performance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Integration Hub</h3>
                  <p className="text-muted-foreground">
                    We've built a comprehensive integration system that connects with educational platforms, 
                    job boards, and productivity tools to provide a seamless experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-10 text-center">The Team</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {/* Team member cards would go here */}
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-200"></div>
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">CEO & Founder</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-200"></div>
                  <h3 className="font-bold">Michael Chen</h3>
                  <p className="text-sm text-muted-foreground">CTO</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-200"></div>
                  <h3 className="font-bold">Aisha Patel</h3>
                  <p className="text-sm text-muted-foreground">Head of AI</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-200"></div>
                  <h3 className="font-bold">David Wilson</h3>
                  <p className="text-sm text-muted-foreground">UX Director</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
