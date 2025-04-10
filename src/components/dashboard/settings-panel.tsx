
import { Button } from "@/components/ui/button";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Settings, ChevronDown } from "lucide-react";
import { useUser, UserRole } from "@/contexts/user-context";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function SettingsPanel() {
  const { user, updatePreferences } = useUser();
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  
  if (!user) return null;
  
  const toggleModule = (moduleId: string) => {
    const hiddenModules = [...user.preferences.hiddenModules];
    const index = hiddenModules.indexOf(moduleId);
    
    if (index >= 0) {
      hiddenModules.splice(index, 1);
    } else {
      hiddenModules.push(moduleId);
    }
    
    updatePreferences({ hiddenModules });
  };
  
  const setRole = (role: UserRole) => {
    // This would be handled by an actual role change API in a real app
    console.log(`Set role to: ${role}`);
  };
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dashboard Settings</h4>
            <p className="text-sm text-muted-foreground">
              Customize your dashboard experience
            </p>
          </div>
          <Separator />
          
          <Collapsible
            open={settingsOpen}
            onOpenChange={setSettingsOpen}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold">Visible Modules</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    settingsOpen && "rotate-180"
                  )}/>
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="grid gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="module-courses"
                    checked={!user.preferences.hiddenModules.includes("courses")}
                    onChange={() => toggleModule("courses")}
                  />
                  <label htmlFor="module-courses">Course Recommendations</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="module-career"
                    checked={!user.preferences.hiddenModules.includes("career")}
                    onChange={() => toggleModule("career")}
                  />
                  <label htmlFor="module-career">AI Career Mentor</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="module-planner"
                    checked={!user.preferences.hiddenModules.includes("planner")}
                    onChange={() => toggleModule("planner")}
                  />
                  <label htmlFor="module-planner">Smart Study Planner</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="module-resume"
                    checked={!user.preferences.hiddenModules.includes("resume")}
                    onChange={() => toggleModule("resume")}
                  />
                  <label htmlFor="module-resume">Resume Generator</label>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">View As Role</h4>
            <RadioGroup defaultValue={user.role} className="grid gap-2 pt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="role-student" onClick={() => setRole("student")} />
                <label htmlFor="role-student" className="text-sm">Student</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mentor" id="role-mentor" onClick={() => setRole("mentor")} />
                <label htmlFor="role-mentor" className="text-sm">Mentor</label>
              </div>
              {user.role === "admin" && (
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="admin" id="role-admin" onClick={() => setRole("admin")} />
                  <label htmlFor="role-admin" className="text-sm">Admin</label>
                </div>
              )}
            </RadioGroup>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
