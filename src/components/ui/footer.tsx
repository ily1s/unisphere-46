
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-12 bg-gray-50">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-7 w-7 text-unisphere-purple-600" />
            <span className="font-bold text-xl">UniSphere</span>
          </div>
          <p className="text-sm text-muted-foreground">
            AI-powered academic ecosystem helping university students excel in their academic and career journey.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/courses" className="text-muted-foreground hover:text-foreground">Course Recommendations</Link></li>
            <li><Link to="/career" className="text-muted-foreground hover:text-foreground">AI Career Mentor</Link></li>
            <li><Link to="/planner" className="text-muted-foreground hover:text-foreground">Smart Study Planner</Link></li>
            <li><Link to="/resume" className="text-muted-foreground hover:text-foreground">Resume Generator</Link></li>
            <li><Link to="/collaborate" className="text-muted-foreground hover:text-foreground">Collaboration Hub</Link></li>
            <li><Link to="/research" className="text-muted-foreground hover:text-foreground">Research Assistant</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
            <li><Link to="/help" className="text-muted-foreground hover:text-foreground">Help Center</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} UniSphere. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
