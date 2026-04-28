
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

// Predefined responses with comprehensive site data
const botResponses: Record<string, string> = {
  "pricing": "Our pricing varies by project type:\n\n• AI Automation: $25K-$60K (6-10 weeks)\n• SaaS Platform MVP: $50K-$100K (12-16 weeks)\n• Full SaaS Platform: $100K-$200K (16-24 weeks)\n• Enterprise Software: $75K-$200K (16-24 weeks)\n• Custom CRM/ERP: $75K-$150K (16-20 weeks)\n• API Development: $30K-$60K (8-12 weeks)\n• Business Intelligence Dashboard: $40K-$80K (10-14 weeks)\n\nWe offer fixed-price quotes after discovery. Share your project details for an accurate estimate.",
  
  "services": "DevGenX specializes in:\n\n1. 🤖 AI Automation & Integration - ChatGPT APIs, document processing, workflow automation (reduce costs by 40%)\n2. 🚀 Large-Scale SaaS Platforms - Multi-tenant architecture, subscription management, handles millions of users\n3. 💼 Custom Enterprise Software - CRM, ERP, inventory management, internal tools\n4. 📊 Data Engineering & Analytics - BI dashboards, ETL pipelines, real-time analytics\n5. ⚡ API Development & Microservices - RESTful APIs, GraphQL, sub-200ms response times\n6. 🎨 UI/UX Design & Branding - Conversion-optimized interfaces, complete brand identity\n\nWhat type of solution are you looking for?",
  
  "contact": "You can reach us:\n\n📧 Email: info@devgenx.com\n📱 WhatsApp: +92 343 6468 0\n🌐 Contact Form: devgenx.vercel.app/contact\n💼 LinkedIn: linkedin.com/in/-alijawad\n\nWe typically respond within 24 hours on business days. For urgent inquiries, WhatsApp is fastest!",
  
  "timeline": "Typical project timelines:\n\n• AI Chatbot: 6-10 weeks\n• Document Processing System: 6-8 weeks\n• SaaS MVP: 12-16 weeks\n• Full SaaS Platform: 16-24 weeks\n• Enterprise CRM: 16-20 weeks\n• API Integration: 4-8 weeks\n• Business Intelligence Dashboard: 10-14 weeks\n\nWe provide weekly demos every Friday and maintain 100% on-time delivery record. What's your target launch date?",
  
  "team": "DevGenX is led by Jawad Abbas, an enterprise SaaS architect with 8+ years experience building applications for millions of users.\n\nOur team includes:\n• Senior Full-Stack Developers (React, Node.js, Python)\n• AI/ML Engineers (OpenAI, TensorFlow)\n• UI/UX Designers\n• DevOps Specialists (AWS, Kubernetes)\n\nWe've delivered 50+ production applications serving millions of users across fintech, e-commerce, healthcare, and SaaS industries.",
  
  "process": "Our 6-step development process:\n\n1. 📞 Discovery Call (30 mins) - Understand your goals, budget, and requirements\n2. 📋 Technical Spec (2-3 days) - Wireframes, database design, API docs, fixed quote\n3. 💻 Weekly Builds (6-12 weeks) - Live demos every Friday, continuous feedback\n4. 🧪 Testing & Polish (1-2 weeks) - Performance testing, security audits, bug fixes\n5. 🚀 Launch Day - Deployment, SSL setup, monitoring, DNS configuration\n6. 🛠️ Post-Launch Support - 30 days free support, then optional monthly retainer\n\nWeekly demos keep you in the loop throughout!",
  
  "portfolio": "Recent projects:\n\n• ContractorHub - Directory + lead-gen platform (contractorhub.com)\n• EstimatingHub - Construction estimating portal (estimatinghub.com)\n• Paradise Estimating - Conversion-focused estimating site (paradiseestimating.com)\n• DecExperts - Specialist services platform (decexperts.com)\n• BitWords Inc Platform - Scalable web app with 40% performance improvement (bitwords.com)\n• Ekhata ERP System - Enterprise system with AI integration and LLM models\n• Connect Solutions ML Platform - 3 deployed ML models for data analysis\n• FusionCortex - Tech solutions platform (fusioncortex.com)\n• Skimming AI - AI tooling directory (skimming.ai)\n• FreeTool AI - AI tools directory (freetoolai.com)\n\nView all 50+ projects at devgenx.vercel.app/portfolio",
  
  "technologies": "Our tech stack:\n\n**Frontend:** React.js, Next.js, TypeScript, Tailwind CSS\n**Backend:** Node.js (Express, NestJS), Python (Django, FastAPI)\n**Database:** MongoDB, PostgreSQL, Redis\n**AI/ML:** OpenAI GPT-4, Pinecone Vector DB, TensorFlow\n**Cloud:** AWS, Vercel, DigitalOcean, Azure\n**DevOps:** Docker, Kubernetes, CI/CD pipelines, GitHub Actions\n\nWe choose the best stack for your specific needs and can work with your existing infrastructure.",
  
  "nda": "Yes, we're happy to sign NDAs before discussing your project details. We can use your NDA template or provide ours. Confidentiality and data security are standard practice for all our engagements.\n\nWe also comply with GDPR, HIPAA, and SOC 2 requirements when needed.",
  
  "maintenance": "Post-launch support options:\n\n• ✅ 30 days free support (included with all projects)\n• 📅 Monthly retainer: $2K-$5K/month\n• ⚡ On-demand support: $150-$250/hour\n\nIncludes: bug fixes, performance monitoring, security updates, feature enhancements, technical support, and server maintenance.\n\nWe also offer 24/7 monitoring and incident response for mission-critical applications.",
  
  "payment": "Payment terms:\n\n• Fixed-price projects: 40% kickoff, 40% mid-project, 20% on delivery\n• Monthly retainer: Billed at start of each month\n• Accepted methods: Bank transfer, Stripe, PayPal, Wire transfer\n\nWe provide detailed invoices and can accommodate custom payment schedules for enterprise clients. All payments are secure and we never charge until you approve the scope.",
  
  "ai": "Our AI automation services:\n\n🤖 ChatGPT API Integration - Custom chatbots, content generation, intelligent assistants\n📄 Document Processing - Extract data from PDFs, invoices, forms (95%+ accuracy, 1000+ docs/hour)\n⚙️ Workflow Automation - Eliminate manual tasks, save 20-30 hours/week\n📈 Predictive Analytics - Forecast sales, identify churn risks, optimize inventory\n🧠 ML Model Development - Custom models trained on your data\n\nTypical ROI: 40% cost reduction within 6 months. Brooklyn e-commerce client saved 30 hours/month with our AI chatbot. Interested in a free automation assessment?",
  
  "saas": "We build scalable SaaS platforms with:\n\n✅ Multi-tenant architecture (shared or separate databases)\n✅ Subscription management (Stripe/Paddle integration)\n✅ User authentication & role-based access\n✅ Admin dashboards & analytics\n✅ API integrations & webhooks\n✅ Real-time features (WebSockets)\n✅ Email notifications & workflows\n\nOur SaaS platforms handle millions of users with 99.9% uptime and sub-200ms response times. We've built platforms processing billions of transactions. Need help with your SaaS idea?",
  
  "location": "We're based in Pakistan but serve clients globally, with a focus on New York businesses:\n\n🗽 Manhattan - FinTech, SaaS, Enterprise\n🌉 Brooklyn - E-commerce, Startups, Agencies\n👑 Queens - Healthcare, Education, Manufacturing\n🏙️ Upstate NY - Remote development, consulting\n\nWe work across all US time zones and maintain flexible hours for client calls. 50+ NYC clients trust us with their mission-critical applications.",
  
  "guarantee": "Our guarantees:\n\n✅ 100% on-time delivery record\n✅ Sub-200ms API response times\n✅ 99.9% uptime SLA\n✅ OWASP security compliance\n✅ Lighthouse 90+ performance scores\n✅ 30 days free post-launch support\n✅ Full code ownership (you own everything)\n✅ Weekly demos (no surprises)\n\nIf we miss a deadline, we work extra hours at no cost until delivery. Your success is our success.",
  
  "industries": "We've worked with clients in:\n\n💰 FinTech - Trading platforms, payment systems, portfolio management\n🛒 E-commerce - Online stores, marketplaces, inventory systems\n🏥 Healthcare - Patient management, telemedicine, HIPAA-compliant apps\n🏗️ Construction - Estimating tools, contractor directories, project management\n💼 SaaS - B2B platforms, productivity tools, collaboration software\n🏠 Real Estate - Property management, listings, CRM systems\n📚 Education - Learning platforms, student management\n\nWhat industry are you in?",
  
  "nyc": "We specialize in serving New York businesses:\n\n📍 Manhattan clients: FinTech startups, enterprise SaaS, trading platforms\n📍 Brooklyn clients: E-commerce stores, creative agencies, fashion tech\n📍 Queens clients: Healthcare systems, manufacturing software\n\nReal NYC results:\n• Manhattan trading platform: 57% faster load times, 2x signups\n• Brooklyn e-commerce: 30 hours/month saved with AI chatbot\n• Queens SaaS startup: Scaled to 10K users in 6 months\n\nServing NYC since 2020 with 50+ successful projects.",
  
  "roi": "Typical ROI from our projects:\n\n📊 AI Automation: 40% cost reduction, 6-9 month payback\n🚀 SaaS Platforms: 2-3x user growth in first year\n💼 Enterprise Software: 30-50% efficiency improvement\n📈 Data Analytics: 15-20% margin improvement\n\nReal example: Brooklyn e-commerce client invested $45K in AI chatbot, saves $3,600/month (30 hours). ROI achieved in 4 months.\n\nWant ROI projections for your specific project?"
};

// Quick questions
const quickQuestions: QuickQuestion[] = [
  { id: "q1", question: "What services do you offer?" },
  { id: "q2", question: "How much does it cost?" },
  { id: "q3", question: "Show me your portfolio" },
  { id: "q4", question: "What's your process?" },
  { id: "q5", question: "Tell me about AI automation" },
  { id: "q6", question: "Can you build SaaS platforms?" },
  { id: "q7", question: "How do I contact you?" }
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
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything about our services, pricing, or process..."
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
