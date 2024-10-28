import React, { useState } from 'react';
import { Mail, Phone, ChevronRight, Chrome, Facebook } from 'lucide-react';

interface AuthScreenProps {
  onClose: () => void;
  answers: Record<number, string>;
}

export default function AuthScreen({ onClose, answers }: AuthScreenProps) {
  const [authMethod, setAuthMethod] = useState<'email' | 'phone' | null>(null);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      setError('Please accept the terms and conditions to continue');
      return;
    }
    // Here you would handle the authentication
    console.log('Auth details:', { authMethod, email, phone, answers });
  };

  const handleSocialLogin = (provider: 'google' | 'facebook') => {
    if (!acceptedTerms) {
      setError('Please accept the terms and conditions to continue');
      return;
    }
    // Here you would handle social login
    console.log('Social login with:', provider);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-white mb-6">
        See Your Potential Claims
      </h2>
      <p className="text-slate-400 mb-8">
        Create an account to view your matched opportunities and start your claims process.
      </p>

      <div className="space-y-4 mb-8">
        <button
          onClick={() => handleSocialLogin('google')}
          className="w-full flex items-center justify-center gap-3 p-3 rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition-all duration-200"
        >
          <Chrome className="w-5 h-5" />
          Continue with Google
        </button>
        <button
          onClick={() => handleSocialLogin('facebook')}
          className="w-full flex items-center justify-center gap-3 p-3 rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition-all duration-200"
        >
          <Facebook className="w-5 h-5" />
          Continue with Facebook
        </button>
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-800"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-slate-900 text-slate-400">Or continue with</span>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <button
          onClick={() => setAuthMethod('email')}
          className={`w-full flex items-center justify-between p-3 rounded-lg border ${
            authMethod === 'email' ? 'border-emerald-500 bg-slate-800' : 'border-slate-700'
          } text-white hover:bg-slate-800 transition-all duration-200`}
        >
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </div>
          <ChevronRight className="w-5 h-5" />
        </button>
        <button
          onClick={() => setAuthMethod('phone')}
          className={`w-full flex items-center justify-between p-3 rounded-lg border ${
            authMethod === 'phone' ? 'border-emerald-500 bg-slate-800' : 'border-slate-700'
          } text-white hover:bg-slate-800 transition-all duration-200`}
        >
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <span>Phone</span>
          </div>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {authMethod && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {authMethod === 'email' && (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200"
              required
            />
          )}
          {authMethod === 'phone' && (
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-200"
              required
            />
          )}
          
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="terms" className="text-sm text-slate-400">
              I accept the <a href="/terms" className="text-emerald-400 hover:underline">Terms and Conditions</a> and acknowledge that I have read the <a href="/privacy" className="text-emerald-400 hover:underline">Privacy Policy</a>
            </label>
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Continue
          </button>
        </form>
      )}
    </div>
  );
}