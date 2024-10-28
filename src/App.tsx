import React, { useState } from 'react';
import { Brain, ChevronRight, Shield, DollarSign, ArrowRight } from 'lucide-react';
import QuizModal from './components/QuizModal';
import Footer from './components/Footer';

function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      <nav className="border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-emerald-400 text-transparent bg-clip-text">
                Fairway
              </span>
            </div>
            <button className="text-slate-300 hover:text-white transition-colors">
              Contact
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 mb-6">
            Get Paid for Getting Wronged
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            Our AI-powered platform identifies opportunities where you might be owed money. Take our quick quiz to discover your potential claims.
          </p>
          
          <button
            onClick={() => setShowQuiz(true)}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-emerald-500 hover:bg-emerald-600 rounded-full transition-all duration-200 ease-in-out hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
          >
            Start Your Free Check
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
            <Shield className="w-12 h-12 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Protected Rights</h3>
            <p className="text-slate-400">We help identify when your consumer rights have been violated and guide you through the resolution process.</p>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
            <Brain className="w-12 h-12 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Analysis</h3>
            <p className="text-slate-400">Our advanced AI system analyzes your situation against thousands of potential claims and legal precedents.</p>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
            <DollarSign className="w-12 h-12 text-emerald-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Maximum Recovery</h3>
            <p className="text-slate-400">We work to ensure you receive the maximum compensation you're entitled to under the law.</p>
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex items-center space-x-2 text-slate-400 mb-4">
            <ArrowRight className="w-5 h-5" />
            <span>How it works</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="relative">
              <div className="bg-slate-800/30 p-6 rounded-lg">
                <span className="absolute -top-4 left-4 text-5xl font-bold text-emerald-500/20">1</span>
                <h3 className="text-white font-semibold mb-2">Take the Quiz</h3>
                <p className="text-slate-400">Answer a few simple questions about your experiences and potential claims.</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800/30 p-6 rounded-lg">
                <span className="absolute -top-4 left-4 text-5xl font-bold text-emerald-500/20">2</span>
                <h3 className="text-white font-semibold mb-2">Get Matched</h3>
                <p className="text-slate-400">Our AI identifies relevant opportunities where you may be owed compensation.</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800/30 p-6 rounded-lg">
                <span className="absolute -top-4 left-4 text-5xl font-bold text-emerald-500/20">3</span>
                <h3 className="text-white font-semibold mb-2">Claim Your Money</h3>
                <p className="text-slate-400">We guide you through the process of claiming your compensation.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <QuizModal isOpen={showQuiz} onClose={() => setShowQuiz(false)} />
    </div>
  );
}

export default App;