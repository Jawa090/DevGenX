
import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Types
interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface QuickQuestion {
  id: string;
  question: string;
}

// Predefined responses
const botResponses: Record<string, string> = {
  "pricing": "Our pricing depends on the specific requirements of your project. For MERN stack development, prices typically start at $5,000. For AI solutions, prices start at $8,000. For a detailed quote, contact us directly.",
  "services": "We offer a wide range of services including MERN Stack Development, AI Solutions, Graphic Design, Python Development, Data Analysis, and Machine Learning. Each service is customized to meet your specific business needs.",
  "contact": "You can reach us through our contact form, by email at info@devgenx.com, or by phone at +1 (555) 123-4567. We're available Monday to Friday, 9 AM to 6 PM EST.",
  "timeline": "Project timelines vary based on complexity. Simple websites typically take 2-4 weeks, while complex applications with AI integration may take 2-6 months. We'll provide a detailed timeline during our initial consultation.",
  "team": "Our team consists of experienced developers, designers, data scientists, and AI specialists. All team members have at least 5 years of experience in their respective fields and are passionate about delivering exceptional digital solutions.",
  "process": "Our development process includes: 1) Initial consultation to understand your requirements, 2) Project planning and design, 3) Development and implementation, 4) Testing and quality assurance, 5) Deployment, and 6) Ongoing support and maintenance.",
  "portfolio": "You can view our portfolio on our website. It showcases our best projects across various industries including e-commerce, finance, healthcare, and education. Each case study provides detailed information about the challenges we tackled and the solutions we implemented.",
  "technologies": "We specialize in modern technologies including React, Node.js, MongoDB, Express, Python, TensorFlow, PyTorch, and various AI and ML frameworks. We also work with design tools like Adobe Creative Suite and Figma."
};

// Quick questions
const quickQuestions: QuickQuestion[] = [
  { id: "q1", question: "What services do you offer?" },
  { id: "q2", question: "How much do your services cost?" },
  { id: "q3", question: "How can I contact you?" },
  { id: "q4", question: "What is your development process?" },
  { id: "q5", question: "How long does a project take?" }
];

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm devGenX's virtual assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      // Process message and get response
      const botResponse = getBotResponse(input);
      
      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    setTimeout(() => handleSend(), 100); // Small delay for state to update
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Check for keywords in the input
    if (input.includes("pricing") || input.includes("cost") || input.includes("price") || input.includes("how much")) {
      return botResponses.pricing;
    } else if (input.includes("services") || input.includes("what do you offer") || input.includes("what do you do")) {
      return botResponses.services;
    } else if (input.includes("contact") || input.includes("email") || input.includes("phone") || input.includes("reach")) {
      return botResponses.contact;
    } else if (input.includes("timeline") || input.includes("how long") || input.includes("time frame") || input.includes("deadline")) {
      return botResponses.timeline;
    } else if (input.includes("team") || input.includes("staff") || input.includes("employees") || input.includes("experts")) {
      return botResponses.team;
    } else if (input.includes("process") || input.includes("how do you") || input.includes("methodology") || input.includes("approach")) {
      return botResponses.process;
    } else if (input.includes("portfolio") || input.includes("projects") || input.includes("case studies") || input.includes("examples")) {
      return botResponses.portfolio;
    } else if (input.includes("tech") || input.includes("technologies") || input.includes("stack") || input.includes("tools")) {
      return botResponses.technologies;
    } else {
      return "I'm not sure I understand your question. Could you rephrase it or choose one of the quick questions below?";
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4 overflow-y-auto scrollbar-none">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "mb-4 max-w-[80%]",
              message.sender === "user" ? "ml-auto" : "mr-auto"
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "p-3 rounded-lg",
                message.sender === "user"
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                  : "glass-card text-white/90"
              )}
            >
              {message.content}
            </motion.div>
            <div
              className={cn(
                "text-xs mt-1 text-white/50",
                message.sender === "user" ? "text-right" : "text-left"
              )}
            >
              {message.timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              })}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="mb-4 max-w-[80%]">
            <div className="glass-card p-3 rounded-lg inline-flex">
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-white/70 rounded-full animate-bounce"></div>
                <div className="h-2 w-2 bg-white/70 rounded-full animate-bounce animation-delay-200"></div>
                <div className="h-2 w-2 bg-white/70 rounded-full animate-bounce animation-delay-400"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 border-t border-white/10">
        <div className="flex flex-wrap gap-2 mb-3">
          {quickQuestions.map((q) => (
            <Button
              key={q.id}
              variant="outline"
              size="sm"
              className="text-xs text-neon-blue hover:bg-white/10 rounded-full px-3"
              onClick={() => handleQuickQuestion(q.question)}
            >
              {q.question}
            </Button>
          ))}
        </div>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-neon-blue/40"
          />
          <Button
            onClick={handleSend}
            className="bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
