
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <Card className={cn("transition-all duration-200 hover:shadow-md hover:-translate-y-1 group", className)}>
      <CardHeader className="pb-3">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-unisphere-blue-100 group-hover:bg-unisphere-blue-200 transition-colors">
          <Icon className="h-6 w-6 text-unisphere-blue-600" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base group-hover:text-foreground transition-colors">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
