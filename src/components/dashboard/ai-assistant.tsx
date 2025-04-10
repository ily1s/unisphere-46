
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageSquare, 
  User, 
  Bot, 
  Maximize2, 
  Minimize2, 
  X, 
  Send 
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
};

// Initial conversation
const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hi there! I'm your UniSphere AI assistant. How can I help you today?",
    sender: "assistant",
    timestamp: new Date(),
  }
];

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  
  const toggleOpen = () => {
    setOpen(!open);
    if (minimized) setMinimized(false);
  };
  
  const toggleMinimize = () => {
    setMinimized(!minimized);
  };
  
  const sendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const responses = [
        "I can help you find courses related to your interests. What subjects are you studying?",
        "Would you like me to recommend some resources for your current courses?",
        "I can help you organize your study schedule. Do you have any upcoming deadlines?",
        "Need help with your resume? I can give you some tips on how to make it stand out.",
        "Let me know if you want to explore internship opportunities in your field."
      ];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        sender: "assistant",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
  
  if (!open) {
    return (
      <Button
        onClick={toggleOpen}
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    );
  }
  
  return (
    <Card className={cn(
      "fixed right-4 transition-all duration-300 shadow-lg z-50",
      minimized 
        ? "bottom-4 h-14 w-64" 
        : "bottom-4 h-96 w-80"
    )}>
      <CardHeader className="px-4 py-2 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">
          {minimized ? "AI Assistant" : "UniSphere Assistant"}
        </CardTitle>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleMinimize}>
            {minimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleOpen}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      {!minimized && (
        <>
          <CardContent className="p-4">
            <ScrollArea className="h-56 pr-4">
              <div className="flex flex-col gap-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex max-w-[80%] flex-col gap-1 rounded-lg p-2",
                      message.sender === "user"
                        ? "ml-auto bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      {message.sender === "user" ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4" />
                      )}
                      <span className="text-xs font-medium">
                        {message.sender === "user" ? "You" : "Assistant"}
                      </span>
                    </div>
                    <p className="text-sm">{message.content}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-2">
            <div className="flex w-full items-center gap-2">
              <Input
                placeholder="Ask a question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button size="icon" onClick={sendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
