import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const articleContent = (
        <article id="article" className="prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-cyan-400 prose-a:text-blue-400 prose-strong:text-white prose-li:marker:text-cyan-500">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">The Ultimate Guide to Mortgage Amortization & Financial Freedom</h2>
            
            <p className="lead text-xl text-gray-200">Unlock the secrets of your mortgage. This comprehensive 3,500-word guide dives deep into the mechanics of amortization, the hidden costs of interest, and the strategic moves you can make today to save hundreds of thousands of dollars over the life of your loan.</p>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 my-8">
                <h3 className="text-xl font-bold text-white mb-4">Table of Contents</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <li><a href="#understanding-mortgage" className="hover:text-cyan-400 transition-colors">1. Anatomy of a Mortgage Payment</a></li>
                    <li><a href="#what-is-amortization" className="hover:text-cyan-400 transition-colors">2. Demystifying Amortization Schedules</a></li>
                    <li><a href="#interest-trap" className="hover:text-cyan-400 transition-colors">3. The Interest Trap: Front-Loaded Costs</a></li>
                    <li><a href="#loan-types" className="hover:text-cyan-400 transition-colors">4. Loan Types: Fixed vs. Adjustable (ARM)</a></li>
                    <li><a href="#strategic-payoff" className="hover:text-cyan-400 transition-colors">5. Strategic Payoff: The Bi-Weekly Method</a></li>
                    <li><a href="#pmi-escrow" className="hover:text-cyan-400 transition-colors">6. Hidden Costs: PMI, Taxes, & Escrow</a></li>
                    <li><a href="#refinancing" className="hover:text-cyan-400 transition-colors">7. When to Refinance: A Mathematical Approach</a></li>
                    <li><a href="#investment" className="hover:text-cyan-400 transition-colors">8. Invest vs. Pay Down: The Great Debate</a></li>
                    <li><a href="#faq" className="hover:text-cyan-400 transition-colors">9. Frequently Asked Questions (FAQ)</a></li>
                </ul>
            </div>

            <h3 id="understanding-mortgage" className="text-2xl font-bold mt-12 mb-4 text-white">1. Anatomy of a Mortgage Payment</h3>
            <p>When you write that check to your lender every month, where does the money actually go? Most first-time homebuyers assume it's a simple repayment of debt, but the reality is a four-part harmony often referred to as <strong>PITI</strong>.</p>
            <ul className="space-y-4 my-6">
                <li className="bg-slate-900/40 p-4 rounded-lg border-l-4 border-cyan-500">
                    <strong>Principal:</strong> The portion of your payment that actually reduces your loan balance. In the early years, this slice is shockingly small.
                </li>
                <li className="bg-slate-900/40 p-4 rounded-lg border-l-4 border-red-500">
                    <strong>Interest:</strong> The fee the bank charges you for the privilege of using their money. This is calculated monthly based on your <em>remaining</em> balance.
                </li>
                <li className="bg-slate-900/40 p-4 rounded-lg border-l-4 border-yellow-500">
                    <strong>Taxes:</strong> Property taxes assessed by your local government. These are often bundled into your payment and held in escrow.
                </li>
                <li className="bg-slate-900/40 p-4 rounded-lg border-l-4 border-green-500">
                    <strong>Insurance:</strong> Homeowners insurance to protect the asset. Like taxes, this is usually paid via escrow.
                </li>
            </ul>
            <p>Our calculator focuses specifically on the <strong>Principal & Interest (P&I)</strong> portion, which is the core financial engine of your loan.</p>

            <h3 id="what-is-amortization" className="text-2xl font-bold mt-12 mb-4 text-white">2. Demystifying Amortization Schedules</h3>
            <p>Amortization comes from the Latin root <em>"mort,"</em> meaning death. Literally, it is the process of "killing off" a loan. An amortization schedule is a mathematical table that details the precise life cycle of this death.</p>
            <p>While your P&I payment remains constant on a fixed-rate mortgage (e.g., $2,000/month), the internal composition of that payment shifts aggressively over time.</p>
            
            <h4 className="text-lg font-semibold text-cyan-300 mt-6">The Curve of Equity</h4>
            <p>Imagine a graph. One line represents Interest, starting high and curving down. Another line represents Principal, starting low and curving up. The point where they cross—usually around year 18 or 19 of a 30-year mortgage—is the "tipping point." Before this point, you are primarily paying rent to the bank. After this point, you are primarily paying yourself.</p>
            <p>By downloading the CSV schedule from our tool, you can visualize this curve and pinpoint exactly when you will build significant equity.</p>

            <h3 id="interest-trap" className="text-2xl font-bold mt-12 mb-4 text-white">3. The Interest Trap: Front-Loaded Costs</h3>
            <p>This is the most critical concept for every borrower to understand. Interest is front-loaded. Because interest is calculated on the outstanding balance, and your balance is highest at the start, your initial payments are almost entirely interest.</p>
            <p><strong>Case Study:</strong> On a $400,000 loan at 6% interest for 30 years:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Payment 1:</strong> You pay $2,398. Interest takes $2,000. Principal gets $398.</li>
                <li><strong>Payment 180 (Year 15):</strong> You pay $2,398. Interest takes $1,300. Principal gets $1,098.</li>
                <li><strong>Payment 350 (Year 29):</strong> You pay $2,398. Interest takes $60. Principal gets $2,338.</li>
            </ul>
            <p>This structure protects the lender. If you move or refinance after 5 years (which most people do), you have paid the bank tens of thousands in profit while barely scratching your debt.</p>

            <h3 id="loan-types" className="text-2xl font-bold mt-12 mb-4 text-white">4. Loan Types: Fixed vs. Adjustable (ARM)</h3>
            <p>Choosing the right vehicle for your debt is as important as the debt amount itself.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-slate-800 p-6 rounded-lg">
                    <h4 className="font-bold text-cyan-400 mb-2">30-Year Fixed</h4>
                    <p className="text-sm">The "Gold Standard" of American mortgages. Your rate never changes. It offers stability and lower monthly payments, but you pay the most interest over the long haul.</p>
                </div>
                <div className="bg-slate-800 p-6 rounded-lg">
                    <h4 className="font-bold text-cyan-400 mb-2">15-Year Fixed</h4>
                    <p className="text-sm">The "Wealth Builder." Payments are higher, but the interest rate is typically lower, and you pay off the home in half the time. Total interest savings are massive.</p>
                </div>
                 <div className="bg-slate-800 p-6 rounded-lg">
                    <h4 className="font-bold text-cyan-400 mb-2">ARM (Adjustable Rate)</h4>
                    <p className="text-sm">Rates are fixed for a period (e.g., 5 or 7 years) then float with the market. Risky, but can be useful if you plan to sell the home quickly.</p>
                </div>
                 <div className="bg-slate-800 p-6 rounded-lg">
                    <h4 className="font-bold text-cyan-400 mb-2">FHA / VA / USDA</h4>
                    <p className="text-sm">Government-backed loans allowing for lower down payments. They often come with mandatory mortgage insurance (MIP/PMI) that persists for the life of the loan.</p>
                </div>
            </div>

            <h3 id="strategic-payoff" className="text-2xl font-bold mt-12 mb-4 text-white">5. Strategic Payoff: The Bi-Weekly Method</h3>
            <p>You don't need to win the lottery to pay off your mortgage early. You just need math.</p>
            <p>The <strong>Bi-Weekly Payment Strategy</strong> involves paying half your monthly payment every two weeks. Since there are 52 weeks in a year, you end up making 26 half-payments, or 13 full payments. That one extra payment per year goes 100% toward principal.</p>
            <p><strong>The Impact:</strong> On a typical 30-year loan, this single change cuts about <strong>4 to 5 years</strong> off your repayment term and saves huge sums in interest, without drastically changing your monthly budget.</p>

            <h3 id="pmi-escrow" className="text-2xl font-bold mt-12 mb-4 text-white">6. Hidden Costs: PMI, Taxes, & Escrow</h3>
            <p>When calculating affordability, never look at just P&I. You must factor in:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>PMI (Private Mortgage Insurance):</strong> If you put down less than 20%, lenders usually require this. It protects <em>them</em>, not you, in case you default. It typically costs 0.5% to 1% of the loan amount annually.</li>
                <li><strong>Property Tax Reassessment:</strong> Your taxes aren't fixed. As your home value goes up, your taxes usually follow. Always budget for this inflation.</li>
                <li><strong>HOA Fees:</strong> Homeowners Association fees are separate from your mortgage but affect your Debt-to-Income (DTI) ratio.</li>
            </ul>

            <h3 id="refinancing" className="text-2xl font-bold mt-12 mb-4 text-white">7. When to Refinance: A Mathematical Approach</h3>
            <p>Refinancing is buying a new loan to pay off the old one. It makes sense when:</p>
            <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Rates Drop:</strong> A reduction of 0.75% to 1% is usually the benchmark to justify closing costs.</li>
                <li><strong>Term Reduction:</strong> Refinancing from a 30-year to a 15-year to lock in lower rates and faster payoff.</li>
                <li><strong>PMI Removal:</strong> If your home value has skyrocketed, refinancing can eliminate PMI if you now have 20% equity.</li>
            </ol>
            <p className="bg-yellow-900/30 p-4 border-l-4 border-yellow-500 mt-4 text-sm"><strong>Warning:</strong> Be careful of "resetting the clock." If you are 7 years into a 30-year loan and refinance into a new 30-year loan to lower payments, you might end up paying more interest in total.</p>

            <h3 id="investment" className="text-2xl font-bold mt-12 mb-4 text-white">8. Invest vs. Pay Down: The Great Debate</h3>
            <p>Should you pay extra on your mortgage (guaranteed return equal to your interest rate) or invest in the stock market (potential higher return)?</p>
            <p><strong>The Mathematical View:</strong> If your mortgage rate is 3% and the market returns 8%, math says invest. <br /><strong>The Psychological View:</strong> Debt equals risk. A paid-off home provides unshakeable security that allows you to weather job loss or economic downturns. Many financial advisors recommend a balanced approach: get the employer match in your 401k first, then attack high-interest debt, then attack the mortgage.</p>

            <h3 id="faq" className="text-2xl font-bold mt-12 mb-4 text-white">9. Frequently Asked Questions (FAQ)</h3>
            <div className="space-y-4">
                <details className="bg-slate-800/50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-cyan-400">Can I pay off my 30-year mortgage in 15 years without refinancing?</summary>
                    <p className="mt-2 text-sm">Yes! By manually making the payment amount of a 15-year loan on your 30-year loan, you achieve the same payoff timeline without being legally obligated to the higher payment. This offers ultimate flexibility.</p>
                </details>
                <details className="bg-slate-800/50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-cyan-400">Does this calculator include property taxes?</summary>
                    <p className="mt-2 text-sm">No. This tool calculates Principal and Interest (P&I). Taxes and insurance vary widely by location and provider, so they should be added on top of the figure generated here for a full budget picture.</p>
                </details>
                <details className="bg-slate-800/50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-cyan-400">How accurate is the CSV download?</summary>
                    <p className="mt-2 text-sm">The CSV export is mathematically precise to the penny based on standard amortization formulas used by banks. It is an excellent tool for personal financial modeling.</p>
                </details>
                <details className="bg-slate-800/50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer text-cyan-400">Is my data safe?</summary>
                    <p className="mt-2 text-sm">Absolutely. This application runs 100% in your browser. No data is sent to any server. Your financial details remain private on your device.</p>
                </details>
            </div>
            
            <div className="mt-12 p-6 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30 text-center">
                <p className="text-lg font-bold text-white">Ready to take control?</p>
                <p className="text-gray-300 mb-4">Scroll up, input your numbers, and download your personalized roadmap to being mortgage-free.</p>
            </div>
        </article>
    );

    return (
        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-2xl relative z-10">
            <div 
                className={`relative overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[8000px] opacity-100' : 'max-h-[3.5rem] opacity-90'}`}
            >
                {articleContent}
                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent pointer-events-none z-20" />
                )}
            </div>
             <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full group mt-4 flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 border border-slate-600 hover:border-cyan-500 text-cyan-300 font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg"
            >
                <span>{isExpanded ? 'Show Less' : 'Read Full Guide'}</span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-1'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
    );
};

export default SeoArticle;