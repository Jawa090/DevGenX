
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  GamepadIcon,
  HelpCircle,
  RefreshCw,
  Trophy,
} from "lucide-react";

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    score: Record<string, number>;
  }[];
}

interface Result {
  service: string;
  description: string;
  path: string;
}

const ServiceQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    mern: 0,
    ai: 0,
    design: 0,
    python: 0,
    data: 0,
    ml: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [completed, setCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      text: "What is the primary goal for your project?",
      options: [
        {
          text: "Creating a web application or website",
          score: { mern: 3, ai: 0, design: 1, python: 0, data: 0, ml: 0 },
        },
        {
          text: "Enhancing user interfaces and visual appeal",
          score: { mern: 1, ai: 0, design: 3, python: 0, data: 0, ml: 0 },
        },
        {
          text: "Analyzing and extracting insights from data",
          score: { mern: 0, ai: 1, design: 0, python: 1, data: 3, ml: 2 },
        },
        {
          text: "Automating processes and implementing AI capabilities",
          score: { mern: 0, ai: 3, design: 0, python: 1, data: 1, ml: 3 },
        },
      ],
    },
    {
      id: 2,
      text: "What technology stack are you most interested in?",
      options: [
        {
          text: "JavaScript/React ecosystem",
          score: { mern: 3, ai: 1, design: 1, python: 0, data: 0, ml: 0 },
        },
        {
          text: "Python-based technologies",
          score: { mern: 0, ai: 1, design: 0, python: 3, data: 2, ml: 2 },
        },
        {
          text: "Machine Learning frameworks",
          score: { mern: 0, ai: 2, design: 0, python: 1, data: 1, ml: 3 },
        },
        {
          text: "Creative design tools",
          score: { mern: 0, ai: 0, design: 3, python: 0, data: 0, ml: 0 },
        },
      ],
    },
    {
      id: 3,
      text: "What is your project timeline?",
      options: [
        {
          text: "Urgent (less than a month)",
          score: { mern: 2, ai: 1, design: 3, python: 2, data: 1, ml: 0 },
        },
        {
          text: "Medium-term (1-3 months)",
          score: { mern: 3, ai: 2, design: 2, python: 2, data: 2, ml: 1 },
        },
        {
          text: "Long-term (3+ months)",
          score: { mern: 2, ai: 3, design: 1, python: 3, data: 3, ml: 3 },
        },
        {
          text: "Ongoing partnership",
          score: { mern: 3, ai: 3, design: 3, python: 3, data: 3, ml: 3 },
        },
      ],
    },
    {
      id: 4,
      text: "What is your budget range?",
      options: [
        {
          text: "Small (under $5,000)",
          score: { mern: 2, ai: 0, design: 3, python: 1, data: 1, ml: 0 },
        },
        {
          text: "Medium ($5,000 - $15,000)",
          score: { mern: 3, ai: 1, design: 2, python: 2, data: 2, ml: 1 },
        },
        {
          text: "Large ($15,000 - $50,000)",
          score: { mern: 2, ai: 3, design: 1, python: 3, data: 3, ml: 2 },
        },
        {
          text: "Enterprise ($50,000+)",
          score: { mern: 1, ai: 3, design: 1, python: 2, data: 3, ml: 3 },
        },
      ],
    },
    {
      id: 5,
      text: "What is most important for your project?",
      options: [
        {
          text: "User experience and visual appeal",
          score: { mern: 2, ai: 1, design: 3, python: 0, data: 0, ml: 0 },
        },
        {
          text: "Performance and scalability",
          score: { mern: 3, ai: 2, design: 0, python: 2, data: 1, ml: 1 },
        },
        {
          text: "Data insights and analysis",
          score: { mern: 0, ai: 1, design: 0, python: 1, data: 3, ml: 2 },
        },
        {
          text: "Innovation and cutting-edge technology",
          score: { mern: 1, ai: 3, design: 1, python: 1, data: 1, ml: 3 },
        },
      ],
    },
  ];

  const results: Record<string, Result> = {
    mern: {
      service: "MERN Stack Development",
      description:
        "Based on your answers, our MERN Stack Development services would be the perfect fit for your project. We can build a full-featured web application with MongoDB, Express.js, React, and Node.js.",
      path: "/services#mern-stack-development",
    },
    ai: {
      service: "AI Solutions",
      description:
        "Your project needs would be best served by our AI Solutions. We can implement cutting-edge artificial intelligence to automate processes and create intelligent systems for your business.",
      path: "/services#ai-solutions",
    },
    design: {
      service: "Graphic Design",
      description:
        "Your focus on visual appeal and user experience makes our Graphic Design services the ideal match. We can create stunning visuals that communicate your brand message effectively.",
      path: "/services#graphic-design",
    },
    python: {
      service: "Python Development",
      description:
        "Based on your preferences, our Python Development services would be perfect for your project. We can create efficient and maintainable Python applications tailored to your needs.",
      path: "/services#python-development",
    },
    data: {
      service: "Data Analysis",
      description:
        "Your project would benefit most from our Data Analysis services. We can help you transform raw data into actionable insights to drive informed business decisions.",
      path: "/services#data-analysis",
    },
    ml: {
      service: "Machine Learning",
      description:
        "The complexity and scope of your project align perfectly with our Machine Learning services. We can implement advanced ML solutions to help automate processes and gain valuable insights.",
      path: "/services#machine-learning",
    },
  };

  const handleSelectOption = (option: {
    text: string;
    score: Record<string, number>;
  }) => {
    const newScores = { ...scores };
    
    // Update scores based on selected option
    Object.keys(option.score).forEach((key) => {
      newScores[key] += option.score[key];
    });
    
    setScores(newScores);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Find the service with the highest score
      let highestScore = 0;
      let highestService = "";
      
      Object.keys(newScores).forEach((service) => {
        if (newScores[service] > highestScore) {
          highestScore = newScores[service];
          highestService = service;
        }
      });
      
      setResult(results[highestService]);
      setShowResult(true);
      setCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({
      mern: 0,
      ai: 0,
      design: 0,
      python: 0,
      data: 0,
      ml: 0,
    });
    setShowResult(false);
    setResult(null);
  };

  return (
    <motion.div
      className="glass-card p-6 md:p-8 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!showResult ? (
        <>
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <GamepadIcon className="text-neon-blue h-8 w-8 mr-2" />
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                Find Your Perfect Service
              </h2>
            </div>
            <p className="text-white/70">
              Answer a few questions to discover which of our services is the best fit for your project.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-neon-blue font-medium">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-white/70 text-sm">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-neon-blue to-neon-purple h-2 rounded-full"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <HelpCircle className="text-neon-purple h-5 w-5 mr-2" />
              {questions[currentQuestion].text}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  className="glass-card p-4 text-left rounded-lg border border-white/10 hover:border-neon-blue transition-all"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleSelectOption(option)}
                >
                  {option.text}
                </motion.button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center mb-6">
            <div className="glass-card p-3 rounded-full mb-4 bg-neon-blue/10 border-neon-blue">
              <Trophy className="text-neon-blue h-10 w-10" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
              Your Perfect Match
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mb-4"></div>
            <h3 className="text-xl font-bold text-neon-blue mb-2">
              {result?.service}
            </h3>
            <p className="text-white/70 mb-6 max-w-lg">
              {result?.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg px-6 py-5 hover:opacity-90 transition-all"
                onClick={() => navigate(result?.path || "/services")}
              >
                <Check className="mr-2 h-4 w-4" /> Learn More
              </Button>
              <Button
                variant="outline"
                className="rounded-lg border-white/20 text-white px-6 py-5 hover:bg-white/5"
                onClick={resetQuiz}
              >
                <RefreshCw className="mr-2 h-4 w-4" /> Retake Quiz
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ServiceQuiz;
