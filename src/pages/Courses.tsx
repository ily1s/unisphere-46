
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { CourseRecommendation } from "@/components/course-recommendation";

const Courses = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-b from-unisphere-blue-50 to-white py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold">Course Recommendations</h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Discover courses tailored to your academic profile, career goals, and learning preferences.
              </p>
            </div>
          </div>
        </div>
        <CourseRecommendation />
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
