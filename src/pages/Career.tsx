
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { CareerMentor } from "@/components/career-mentor";

const Career = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-b from-unisphere-purple-50 to-white py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold">AI Career Mentor</h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Get personalized career guidance, job market insights, and skill development recommendations.
              </p>
            </div>
          </div>
        </div>
        <CareerMentor />
      </main>
      <Footer />
    </div>
  );
};

export default Career;
