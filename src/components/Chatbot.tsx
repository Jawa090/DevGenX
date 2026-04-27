
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

// Predefined responses (short, realistic, and action-oriented)
const botResponses: Record<string, string> = {
  "pricing": "Our pricing depends on scope. Typical starting points: MERN marketing site $2.5k–$5k, full MERN app $6k+, AI chatbot $3k+, data dashboards $2k+. Share goals and deadline, and I'll outline a fixed‑scope quote.",
  "services": "We ship: MERN apps, AI chatbots/automation, Python backends, data dashboards, and conversion‑focused design. If you describe your use case, I'll map it to a suggested stack.",
  "contact": "Fastest: the Contact page form. Prefer email? info@devgenx.com. We usually reply within 24h on business days.",
  "timeline": "Rough guide: landing page 1–2 weeks; MVP web app 3–6 weeks; AI chatbot 1–3 weeks incl. evals; complex integrations 6–10 weeks. We confirm a milestone plan on kickoff.",
  "team": "You're working with a senior duo: MERN/AI engineering and design. We run weekly demos, code reviews, and keep everything in a shared backlog.",
  "process": "Discovery → Solution design → Iterative build → QA & hardening → Launch. Weekly demos, performance/security checks, and handover docs are included.",
  "portfolio": "See Featured Projects on Home and the Portfolio page. Recent: ContractorHub (directory + lead gen), EstimatingHub, 3R eMotors, and more—each with live links.",
  "technologies": "Frontend: React + Vite/Tailwind. Backend: Node/Express. DB: MongoDB. AI: OpenAI APIs + vector search. Python for data/automation when needed.",
  "nda": "Yes—happy to sign your NDA or provide ours before discussing details.",
  "maintenance": "We offer post‑launch care: bug fixes, minor enhancements, uptime monitoring, and monthly check‑ins. Flexible retainer or on‑demand.",
  "payment": "We support fixed‑scope or milestone billing. 40% kickoff, 40% mid‑project, 20% on delivery is common. Invoices via Stripe/transfer."
};

// Quick questions
const quickQuestions: QuickQuestion[] = [
  { id: "q1", question: "What services do you offer?" },
  { id: "q2", question: "How much do your services cost?" },
  { id: "q3", question: "How can I contact you?" },
  { id: "q4", question: "What is your development process?" },
  { id: "q5", question: "How long does a project take?" },
  { id: "q6", question: "Can you sign an NDA?" },
  { id: "q7", question: "Do you provide maintenance after launch?" }
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
  const [visitorName, setVisitorName] = useState<string>("");
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
    const delay = 700 + Math.floor(Math.random() * 500);
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
    
    // Try to capture a name
    const nameMatch = userInput.match(/(?:i'm|i am|my name is)\s+([a-zA-Z][a-zA-Z\-']{1,30})/i);
    if (nameMatch && !visitorName) {
      const name = nameMatch[1];
      setVisitorName(name);
      return `Nice to meet you, ${name}! Tell me a bit about your project—goal, deadline, and budget range—and I’ll suggest the best plan.`;
    }

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
    } else if (input.includes("nda")) {
      return botResponses.nda;
    } else if (input.includes("mainten") || input.includes("support") || input.includes("after launch")) {
      return botResponses.maintenance;
    } else if (input.includes("payment") || input.includes("invoice") || input.includes("pay") || input.includes("milestone")) {
      return botResponses.payment;
    } else {
      return "I want to give you a useful answer—could you share your goal, deadline, and any examples you like? I can also estimate cost and timeline if you provide basic scope.";
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
