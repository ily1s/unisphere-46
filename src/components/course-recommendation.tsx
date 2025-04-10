
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCard } from "@/components/course-card";

interface Course {
  id: string;
  title: string;
  provider: string;
  description: string;
  rating: number;
  duration: string;
  level: string;
  category: string;
  image: string;
}

// Sample course data
const coursesData: Course[] = [
  {
    id: "1",
    title: "Introduction to Data Science",
    provider: "Coursera",
    description: "Learn the basics of data science, including data analysis, visualization, and machine learning with Python.",
    rating: 4.8,
    duration: "8 weeks",
    level: "Beginner",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Machine Learning Foundations",
    provider: "edX",
    description: "Master the fundamentals of machine learning algorithms and their applications in real-world scenarios.",
    rating: 4.6,
    duration: "10 weeks",
    level: "Intermediate",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Web Development Bootcamp",
    provider: "Udemy",
    description: "Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and modern web development practices.",
    rating: 4.9,
    duration: "12 weeks",
    level: "Beginner",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "AI for Business Strategy",
    provider: "LinkedIn Learning",
    description: "Learn how to leverage artificial intelligence to drive business innovation and transformation.",
    rating: 4.5,
    duration: "6 weeks",
    level: "Advanced",
    category: "Business",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "UX/UI Design Principles",
    provider: "Coursera",
    description: "Master the fundamentals of user experience and interface design for digital products.",
    rating: 4.7,
    duration: "8 weeks",
    level: "Intermediate",
    category: "Design",
    image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Modern JavaScript",
    provider: "edX",
    description: "Explore the latest features and best practices in JavaScript development for the modern web.",
    rating: 4.6,
    duration: "6 weeks",
    level: "Intermediate",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop",
  },
];

export function CourseRecommendation() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = ["all", "Data Science", "Programming", "Business", "Design"];
  
  const filteredCourses = selectedCategory === "all" 
    ? coursesData 
    : coursesData.filter(course => course.category === selectedCategory);

  return (
    <div className="container py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">Recommended Courses</h2>
        <p className="mt-4 text-muted-foreground">
          Personalized course recommendations based on your profile, preferences, and career goals.
        </p>
      </div>
      
      <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
        <div className="flex justify-center mb-8">
          <TabsList>
            {categories.map(category => (
              <TabsTrigger key={category} value={category} className="capitalize">
                {category === "all" ? "All Courses" : category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {categories.map(category => (
          <TabsContent key={category} value={category} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map(course => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  provider={course.provider}
                  description={course.description}
                  rating={course.rating}
                  duration={course.duration}
                  level={course.level}
                  image={course.image}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
