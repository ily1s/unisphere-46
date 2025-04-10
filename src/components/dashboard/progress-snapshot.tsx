
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useUser } from "@/contexts/user-context";
import { Book, Calendar, FileText, Bookmark } from "lucide-react";

export function ProgressSnapshot() {
  const { user } = useUser();
  
  if (!user) return null;
  
  const { progress } = user;
  
  const progressItems = [
    { 
      title: "Active Courses", 
      value: progress.activeCourses,
      icon: Book,
      color: "text-blue-500" 
    },
    { 
      title: "Completed Courses", 
      value: progress.completedCourses,
      icon: FileText,
      color: "text-green-500" 
    },
    { 
      title: "Upcoming Sessions", 
      value: progress.upcomingSessions,
      icon: Calendar,
      color: "text-purple-500" 
    },
    { 
      title: "Saved Resources", 
      value: progress.savedResources,
      icon: Bookmark,
      color: "text-amber-500" 
    }
  ];
  
  return (
    <Card className="w-full shadow-sm border-t-4 border-t-unisphere-blue-500">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Your Learning Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {progressItems.map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-opacity-10 ${item.color.replace('text', 'bg')}`}>
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.title}</p>
                <p className="text-xl font-bold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <p className="mb-2 text-sm text-muted-foreground">Overall Progress</p>
          <Progress value={65} className="h-2" />
          <p className="mt-2 text-xs text-right text-muted-foreground">65% toward your learning goals</p>
        </div>
      </CardContent>
    </Card>
  );
}
