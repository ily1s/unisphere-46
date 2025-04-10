
import { Button } from "@/components/ui/button";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Dummy notification data
const notifications = [
  {
    id: "1",
    title: "New Course Recommendation",
    description: "Based on your interest in AI, we've found a new course on Deep Learning",
    time: "10 minutes ago",
    read: false,
    type: "recommendation"
  },
  {
    id: "2",
    title: "Upcoming Study Session",
    description: "You have a scheduled study session for Advanced Algorithms in 1 hour",
    time: "15 minutes ago",
    read: false,
    type: "calendar"
  },
  {
    id: "3",
    title: "New Job Alert",
    description: "5 new AI Engineering positions match your profile",
    time: "2 hours ago",
    read: true,
    type: "job"
  },
  {
    id: "4",
    title: "Mentor Message",
    description: "Prof. Smith replied to your question about database normalization",
    time: "Yesterday",
    read: true,
    type: "message"
  }
];

export function NotificationCenter() {
  const [open, setOpen] = useState(false);
  const [userNotifications, setUserNotifications] = useState(notifications);
  
  const unreadCount = userNotifications.filter(n => !n.read).length;
  
  const markAllAsRead = () => {
    setUserNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };
  
  const markAsRead = (id: string) => {
    setUserNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-4">
          <h4 className="font-medium">Notifications</h4>
          <Button variant="ghost" size="sm" onClick={markAllAsRead} className="h-auto p-0 text-xs text-muted-foreground">
            Mark all as read
          </Button>
        </div>
        <Separator />
        <ScrollArea className="h-80">
          {userNotifications.length > 0 ? (
            <div className="divide-y">
              {userNotifications.map((notification) => (
                <div 
                  key={notification.id}
                  className={cn(
                    "flex cursor-pointer flex-col gap-1 p-4 hover:bg-muted/50",
                    notification.read ? "bg-white" : "bg-blue-50"
                  )}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium">{notification.title}</h5>
                    <span className="text-xs text-muted-foreground">{notification.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{notification.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-full items-center justify-center p-4">
              <p className="text-center text-muted-foreground">No notifications</p>
            </div>
          )}
        </ScrollArea>
        <Separator />
        <div className="p-4 text-center">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href="/notifications">View all notifications</a>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
