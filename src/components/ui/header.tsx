
import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Book, GraduationCap, Calendar, FileText, Users, Search } from "lucide-react";

const features = [
  {
    title: "Course Recommendations",
    href: "/courses",
    description: "AI-driven course suggestions based on your profile and goals.",
    icon: Book,
  },
  {
    title: "AI Career Mentor",
    href: "/career",
    description: "Personalized career guidance with job market analysis.",
    icon: GraduationCap,
  },
  {
    title: "Smart Study Planner",
    href: "/planner",
    description: "AI-optimized scheduling integrated with your calendar.",
    icon: Calendar,
  },
  {
    title: "Resume Generator",
    href: "/resume",
    description: "AI-generated ATS-friendly resumes and cover letters.",
    icon: FileText,
  },
  {
    title: "Collaboration Hub",
    href: "/collaborate",
    description: "Connect with students and mentors for projects.",
    icon: Users,
  },
  {
    title: "Research Assistant",
    href: "/research",
    description: "Discover and summarize academic papers with AI.",
    icon: Search,
  },
];

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-7 w-7 text-unisphere-purple-600" />
            <span className="font-bold text-xl">UniSphere</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-2">
                    {features.map((feature) => (
                      <ListItem
                        key={feature.title}
                        title={feature.title}
                        href={feature.href}
                        className="hover:bg-slate-100 rounded-md transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <feature.icon className="h-5 w-5 text-unisphere-blue-600" />
                          <span>{feature.description}</span>
                        </div>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Log in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
