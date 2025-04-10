
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  provider: string;
  description: string;
  rating: number;
  duration: string;
  level: string;
  image: string;
}

export function CourseCard({ title, provider, description, rating, duration, level, image }: CourseCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-1">
      <div className="aspect-video w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="outline" className="mb-2">{provider}</Badge>
            <CardTitle className="line-clamp-2 text-lg">{title}</CardTitle>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <CardDescription className="line-clamp-3">{description}</CardDescription>
        <div className="mt-3 flex gap-3">
          <Badge variant="secondary">{duration}</Badge>
          <Badge variant="secondary">{level}</Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">View Course</Button>
      </CardFooter>
    </Card>
  );
}
