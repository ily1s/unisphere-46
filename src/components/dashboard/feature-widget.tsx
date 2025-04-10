
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FeatureCard } from "@/components/feature-card";
import { useUser } from "@/contexts/user-context";
import { LucideIcon } from "lucide-react";
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@/components/ui/resizable";
import { useState } from "react";

interface FeatureWidgetProps {
  features: {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
  }[];
  onReorder?: (newOrder: string[]) => void;
}

export function FeatureWidget({ features, onReorder }: FeatureWidgetProps) {
  const { user } = useUser();
  const [layout, setLayout] = useState<{ [key: string]: number }>({});
  
  if (!user) return null;
  
  // Sort features based on user preferences
  const sortedFeatures = [...features].sort((a, b) => {
    const aFav = user.preferences.favoriteTools.includes(a.id.toLowerCase()) ? -1 : 0;
    const bFav = user.preferences.favoriteTools.includes(b.id.toLowerCase()) ? -1 : 0;
    
    if (aFav !== bFav) return aFav - bFav;
    
    const aOrder = user.preferences.layout[a.id.toLowerCase()]?.order || 999;
    const bOrder = user.preferences.layout[b.id.toLowerCase()]?.order || 999;
    return aOrder - bOrder;
  });
  
  // Filter out hidden modules
  const visibleFeatures = sortedFeatures.filter(
    f => !user.preferences.hiddenModules.includes(f.id.toLowerCase())
  );
  
  const updateLayout = (id: string, size: number) => {
    setLayout(prev => ({
      ...prev,
      [id]: size
    }));
  };
  
  return (
    <div className="w-full">
      <ResizablePanelGroup direction="horizontal" className="min-h-[calc(100vh-400px)]">
        {visibleFeatures.map((feature, i) => (
          <React.Fragment key={feature.id}>
            <ResizablePanel
              id={feature.id}
              defaultSize={100 / visibleFeatures.length}
              onResize={(size) => updateLayout(feature.id, size)}
              className="p-2"
              minSize={20}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className={user.preferences.favoriteTools.includes(feature.id.toLowerCase()) 
                  ? "border-l-4 border-l-unisphere-purple-500" 
                  : ""
                }
              />
            </ResizablePanel>
            {i < visibleFeatures.length - 1 && (
              <ResizableHandle withHandle />
            )}
          </React.Fragment>
        ))}
      </ResizablePanelGroup>
    </div>
  );
}
