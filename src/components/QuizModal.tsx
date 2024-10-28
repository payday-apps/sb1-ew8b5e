import React, { useState } from 'react';
import { X } from 'lucide-react';
import AuthScreen from './AuthScreen';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    id: 1,
    question: "Have you purchased any products that turned out to be defective?",
    options: ["Yes", "No", "Not sure"]
  },
  {
    id: 2,
    question: "Have you experienced any unexpected fees from financial institutions?",
    options: ["Yes", "No", "Not sure"]
  },
  {
    id: 3,
    question: "Have you been involved in any data breaches in the last 5 years?",
    options: ["Yes", "No", "Not sure"]
  }
];

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showAuth, setShowAuth] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowAuth(true);
    }
  };

  const handleClose = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowAuth(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-900 rounded-2xl w-full max-w-2xl mx-4 relative overflow-hidden border border-slate-800">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!showAuth ? (
          <div className="p-8">
            <div className="w-full bg-slate-800 rounded-full h-2 mb-8">
              <div
                className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="w-full p-4 text-left rounded-lg border border-slate-700 text-white hover:bg-slate-800 hover:border-emerald-500 transition-all duration-200"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 text-sm text-slate-400 text-center">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
        ) : (
          <AuthScreen onClose={handleClose} answers={answers} />
        )}
      </div>
    </div>
  );
}