import React, { useState, ReactNode } from 'react';

const Modal: React.FC<{ title: string; content: ReactNode; onClose: () => void }> = ({ title, content, onClose }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
    <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl shadow-2xl w-full max-w-3xl text-gray-200 max-h-[85vh] flex flex-col transform transition-all scale-100">
      <div className="flex justify-between items-center p-6 border-b border-slate-700/50 bg-slate-800/50 rounded-t-2xl">
        <h2 className="text-2xl font-orbitron font-bold text-cyan-400 tracking-wide">{title}</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-red-400 transition-colors text-2xl leading-none">&times;</button>
      </div>
      <div className="p-8 overflow-y-auto custom-scrollbar prose prose-invert max-w-none">
        {content}
      </div>
      <div className="p-6 border-t border-slate-700/50 bg-slate-800/50 rounded-b-2xl text-right">
        <button onClick={onClose} className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-lg transition-all shadow-lg hover:shadow-cyan-500/25">Close</button>
      </div>
    </div>
  </div>
);

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalContent, setModalContent] = useState<{ title: string; content: ReactNode } | null>(null);

  const getModalContent = (title: string): ReactNode => {
    switch (title) {
      case 'About': return (
        <div className="space-y-4">
          <p className="text-lg">Welcome to the <strong>Mortgage/Amortization Calculator</strong> by doodax.com.</p>
          <p>Our mission is to democratize financial literacy by providing professional-grade tools completely free of charge. This application was architected to give homeowners, real estate investors, and financial planners a precise, transparent view of their loan mechanics.</p>
          <p>Unlike simple calculators, our engine processes the full amortization schedule locally in your browser, ensuring privacy and speed. We believe that understanding how interest accrues is the first step toward financial freedom.</p>
          <p>Version: 2.0.0 (Nebula Edition)</p>
        </div>
      );
      case 'Contact': return (
        <div className="space-y-4">
          <p>We value user feedback and are always looking to improve our financial tools.</p>
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h3 className="text-cyan-400 font-bold mb-2">Get in Touch</h3>
            <p className="mb-2"><strong>Website:</strong> <a href="http://doodax.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">doodax.com</a></p>
            <p><strong>Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-blue-400 hover:underline">hsini.web@gmail.com</a></p>
            <p className="mt-4 text-sm text-gray-400">For business inquiries, bug reports, or feature requests, please allow 24-48 hours for a response.</p>
          </div>
        </div>
      );
      case 'Guide': return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">How to Use This Calculator</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Loan Principal:</strong> Enter the total amount you are borrowing (Home Price minus Down Payment).</li>
            <li><strong>Interest Rate:</strong> Input your annual percentage rate (APR). e.g., 6.5 for 6.5%.</li>
            <li><strong>Loan Term:</strong> Enter the number of years you will be paying the loan (typically 15 or 30).</li>
          </ol>
          <h3 className="text-xl font-bold text-white mt-4">Features</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Real-time Calculation:</strong> Values update instantly as you type.</li>
            <li><strong>Amortization Table:</strong> View the first year of payments directly in the interface.</li>
            <li><strong>CSV Export:</strong> Click "Download Full Amortization Schedule" to get a detailed spreadsheet of every payment for the life of the loan.</li>
          </ul>
        </div>
      );
      case 'Privacy Policy': return (
        <div className="space-y-4 text-sm">
          <p><strong>Last Updated: October 27, 2023</strong></p>
          <p>At Mortgage/Amortization Calculator (doodax.com), we prioritize the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.</p>
          <h4 className="font-bold text-white">Data Collection</h4>
          <p>This application operates as a client-side Single Page Application (SPA). <strong>We do not collect, store, or transmit any personal financial data entered into the calculator forms.</strong> All calculations are performed locally within your web browser's memory. Once you close the tab or refresh the page, your input data is cleared.</p>
          <h4 className="font-bold text-white">Log Files</h4>
          <p>Like many other Web sites, doodax.com makes use of log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user's movement around the site, and gather demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.</p>
          <h4 className="font-bold text-white">Cookies and Web Beacons</h4>
          <p>We may use cookies to store information about visitors' preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser.</p>
          <p>If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at hsini.web@gmail.com.</p>
        </div>
      );
      case 'Terms of Service': return (
        <div className="space-y-4 text-sm">
           <p><strong>Last Updated: October 27, 2023</strong></p>
           <h4 className="font-bold text-white">1. Terms</h4>
           <p>By accessing this Website, accessible from https://Mortgage.doodax.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.</p>
           <h4 className="font-bold text-white">2. Use License</h4>
           <p>Permission is granted to temporarily download one copy of the materials on doodax.com's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
           <ul className="list-disc pl-5">
             <li>modify or copy the materials;</li>
             <li>use the materials for any commercial purpose or for any public display;</li>
             <li>attempt to reverse engineer any software contained on doodax.com's Website;</li>
             <li>remove any copyright or other proprietary notations from the materials; or</li>
             <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
           </ul>
           <h4 className="font-bold text-white">3. Disclaimer</h4>
           <p>All the materials on doodax.com's Website are provided "as is". doodax.com makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, doodax.com does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website. <strong>This tool is for informational purposes only and does not constitute financial advice.</strong></p>
        </div>
      );
      case 'DMCA': return (
        <div className="space-y-4">
          <p>We take intellectual property rights seriously. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond to legitimate notices of alleged copyright infringement.</p>
          <p>If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our Copyright Agent with the following information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest.</li>
            <li>A description of the copyrighted work that you claim has been infringed.</li>
            <li>A description of where the material that you claim is infringing is located on the site.</li>
            <li>Your address, telephone number, and email address.</li>
          </ul>
          <p>Notices should be sent to: <a href="mailto:hsini.web@gmail.com" className="text-cyan-400">hsini.web@gmail.com</a></p>
        </div>
      );
      default: return null;
    }
  };

  const openModal = (title: string) => {
    setModalContent({ title, content: getModalContent(title) });
  };
  
  const navLinks = ['About', 'Contact', 'Guide', 'Privacy Policy', 'Terms of Service', 'DMCA'];

  return (
    <div className="relative min-h-screen bg-[#050510] text-gray-200 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Immersive Cosmic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep Space Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02020a] via-[#0b0c26] to-[#050510]"></div>
        
        {/* Nebula Layer 1 - Purple/Pink */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[100px] animate-pulse-slow"></div>
        
        {/* Nebula Layer 2 - Cyan/Blue */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-900/20 blur-[120px] animate-pulse-slower"></div>
        
        {/* Moving Gradient Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        
        {/* Stars */}
        <div className="absolute inset-0 z-0 opacity-60" style={{
            backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #ddd, rgba(0,0,0,0))',
            backgroundSize: '200px 200px',
            animation: 'twinkle 10s infinite linear'
        }}></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-30 shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-lg shadow-cyan-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Mortgage<span className="text-cyan-400">Calculator</span></h1>
              </div>
              
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {navLinks.map(link => (
                  <button 
                    key={link} 
                    onClick={() => openModal(link)} 
                    className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-all hover:scale-105"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-black/40 backdrop-blur-md border-t border-white/5 py-8 mt-auto z-20">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-4 text-gray-300 font-medium">
              Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-[#FFD700] hover:text-yellow-300 hover:underline transition-colors">HSINI MOHAMED</a>
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
               <a href="http://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                 doodax.com
               </a>
               <span className="text-gray-700">|</span>
               <a href="mailto:hsini.web@gmail.com" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                 hsini.web@gmail.com
               </a>
            </div>
            <p className="mt-4 text-xs text-gray-600">&copy; {new Date().getFullYear()} doodax.com. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {modalContent && (
        <Modal
          title={modalContent.title}
          content={modalContent.content}
          onClose={() => setModalContent(null)}
        />
      )}
      
      <style jsx global>{`
        @keyframes twinkle {
            0% { transform: translateY(0); }
            100% { transform: translateY(-100px); }
        }
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes pulse-slower {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.2); }
        }
        .animate-pulse-slow {
            animation: pulse-slow 8s infinite ease-in-out;
        }
        .animate-pulse-slower {
            animation: pulse-slower 12s infinite ease-in-out;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.8);
        }
      `}</style>
    </div>
  );
};

export default Layout;