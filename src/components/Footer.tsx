import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-4">Legal Disclaimer</h3>
            <p className="text-sm text-slate-400">
              Fairway is not a law firm and does not provide legal advice. The information provided on this website is for general informational purposes only. Your use of this website does not create an attorney-client relationship. Results may vary and past performance does not guarantee future results.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-4">Important Notice</h3>
            <p className="text-sm text-slate-400">
              While we strive to keep our information accurate and up-to-date, we make no guarantees regarding the outcome of any claim. Please consult with appropriate professionals for advice specific to your situation.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800/50 pt-8">
          <p className="text-sm text-slate-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Fairway. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="/terms" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
              Terms & Conditions
            </a>
            <a href="/privacy" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/california" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
              California Residents
            </a>
            <a href="/gdpr" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">
              GDPR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}