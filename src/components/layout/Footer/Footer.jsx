import { Newspaper, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Main structure block split into a fluid row/column stack */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-slate-100 pb-8 text-center sm:flex-row sm:text-left">
          
          {/* Brand block */}
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs">
              <Newspaper size={16} />
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-tight text-slate-900">
                NewsHub
              </h3>
              <p className="text-xs text-slate-400">
                Modern News Experience
              </p>
            </div>
          </div>

          {/* Links & Attributions */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600">
            <a 
              href="https://newsdata.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 transition hover:text-blue-600"
            >
              Data by NewsData.io
              <ExternalLink size={12} className="text-slate-400" />
            </a>
            <span className="hidden h-3 w-px bg-slate-200 sm:block" />
            <a 
              href="#" 
              className="transition hover:text-blue-600"
            >
              Privacy Policy
            </a>
            <span className="hidden h-3 w-px bg-slate-200 sm:block" />
            <a 
              href="#" 
              className="transition hover:text-blue-600"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Infrastructure attribution */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} NewsHub. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-mono tracking-tight">
            Built with React, Vite & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;