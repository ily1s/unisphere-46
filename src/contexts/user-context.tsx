
import React, { createContext, useContext, useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define user types
export type UserRole = "student" | "mentor" | "admin";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  preferences: {
    favoriteTools: string[];
    hiddenModules: string[];
    layout: {
      [key: string]: { order: number; size: "sm" | "md" | "lg" }
    }
  };
  progress: {
    activeCourses: number;
    completedCourses: number;
    upcomingSessions: number;
    savedResources: number;
  };
  goals: string[];
}

// Mock user data
const mockUser: UserProfile = {
  id: "user-1",
  name: "Alex Johnson",
  email: "alex@university.edu",
  avatar: "/avatar.jpg",
  role: "student",
  preferences: {
    favoriteTools: ["career", "courses"],
    hiddenModules: [],
    layout: {
      "courses": { order: 1, size: "md" },
      "career": { order: 2, size: "md" },
      "planner": { order: 3, size: "md" },
      "resume": { order: 4, size: "sm" },
      "collaborate": { order: 5, size: "sm" },
      "research": { order: 6, size: "sm" }
    }
  },
  progress: {
    activeCourses: 3,
    completedCourses: 8,
    upcomingSessions: 2,
    savedResources: 12
  },
  goals: ["Learn AI", "Prepare for internships"]
};

// Create context
interface UserContextType {
  user: UserProfile | null;
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  updatePreferences: (prefs: Partial<UserProfile['preferences']>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simulate fetching user data on mount
    setUser(mockUser);
    setIsLoggedIn(true);
  }, []);

  const login = () => {
    setUser(mockUser);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const updatePreferences = (prefs: Partial<UserProfile['preferences']>) => {
    if (!user) return;
    setUser({
      ...user,
      preferences: {
        ...user.preferences,
        ...prefs
      }
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, login, logout, updatePreferences }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserAvatar = () => {
  const { user } = useUser();
  
  if (!user) return null;
  
  return (
    <Avatar className="h-10 w-10 border-2 border-white">
      <AvatarImage src={user.avatar} alt={user.name} />
      <AvatarFallback className="bg-unisphere-blue-100 text-unisphere-blue-600">
        {user.name.split(' ').map(n => n[0]).join('')}
      </AvatarFallback>
    </Avatar>
  );
};
