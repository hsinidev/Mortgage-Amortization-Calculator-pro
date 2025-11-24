import React, { useState, useMemo, useCallback } from 'react';
import { calculateMonthlyPayment, generateAmortizationSchedule } from '../services/financialMath';
import { exportToCSV } from '../services/csvExporter';
import type { AmortizationData } from '../types';

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(value);
};

const InputField: React.FC<{ id: string; label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; icon: React.ReactNode; }> = ({ id, label, value, onChange, icon }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                {icon}
            </div>
            <input
                type="number"
                id={id}
                value={value}
                onChange={onChange}
                className="w-full bg-slate-700/50 border border-slate-600 rounded-md shadow-sm pl-10 pr-4 py-2 text-white focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                placeholder="0"
            />
        </div>
    </div>
);

const ResultDisplay: React.FC<{ label: string; value: string; large?: boolean }> = ({ label, value, large = false }) => (
    <div className="bg-slate-800/60 p-4 rounded-lg text-center">
        <p className="text-sm text-gray-400 uppercase tracking-wider">{label}</p>
        <p className={`${large ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'} font-orbitron font-bold text-cyan-400 mt-1`}>{value}</p>
    </div>
);


const AmortizationCalculator: React.FC = () => {
    const [principal, setPrincipal] = useState('300000');
    const [rate, setRate] = useState('5.5');
    const [term, setTerm] = useState('30');
    const [error, setError] = useState('');

    const calculationResults = useMemo(() => {
        const p = parseFloat(principal);
        const r = parseFloat(rate);
        const t = parseFloat(term);

        if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r <= 0 || t <= 0) {
            setError('Please enter valid positive numbers for all fields.');
            return null;
        }
        setError('');

        const monthlyPayment = calculateMonthlyPayment(p, r, t);
        const schedule = generateAmortizationSchedule(p, r, t, monthlyPayment);
        
        if (schedule.length === 0) return null;

        const totalPayment = monthlyPayment * t * 12;
        const totalInterest = totalPayment - p;

        return {
            monthlyPayment,
            totalInterest,
            totalPayment,
            schedule,
        };
    }, [principal, rate, term]);

    const handleDownload = useCallback(() => {
        if (calculationResults?.schedule) {
            const headers = ['Month', 'Payment', 'Principal', 'Interest', 'Remaining Balance'];
            exportToCSV(headers, calculationResults.schedule, 'amortization_schedule.csv');
        }
    }, [calculationResults]);
    
    return (
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Mortgage Calculator</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <InputField id="principal" label="Loan Principal" value={principal} onChange={e => setPrincipal(e.target.value)} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M8.433 7.418c.158-.103.346-.196.567-.267v1.698a2.5 2.5 0 00-.567-.267C8.07 8.488 8 8.738 8 9v2c0 .262.07.512.21.733.158.103.346.196.567.267v1.698a2.5 2.5 0 00.567-.267c.436-.285.62-.733.62-1.233V9c0-.5-.184-.948-.62-1.233z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v1.077a4.5 4.5 0 00-1.723 4.223c.334.33.693.633 1.095.877.332.202.69.363 1.078.468V14a1 1 0 102 0v-1.077a4.5 4.5 0 001.723-4.223c-.334-.33-.693-.633-1.095-.877-.332-.202-.69-.363-1.078-.468V5z" clipRule="evenodd" /></svg>} />
                <InputField id="rate" label="Annual Interest Rate" value={rate} onChange={e => setRate(e.target.value)} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l.01-.01M7.75 16.25l6.5-8.5M17 12l-.01.01" /></svg>} />
                <InputField id="term" label="Loan Term (Years)" value={term} onChange={e => setTerm(e.target.value)} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>} />
            </div>

            {error && <p className="text-red-400 text-center mb-4">{error}</p>}
            
            {calculationResults && !error && (
                <>
                    <div className="mb-6">
                        <ResultDisplay label="Monthly Payment" value={formatCurrency(calculationResults.monthlyPayment)} large />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <ResultDisplay label="Total Interest Paid" value={formatCurrency(calculationResults.totalInterest)} />
                        <ResultDisplay label="Total Payments" value={formatCurrency(calculationResults.totalPayment)} />
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-3 text-center">Amortization Schedule Preview</h3>
                        <div className="overflow-x-auto max-h-60 bg-slate-800/60 rounded-lg border border-slate-700">
                           <table className="w-full text-sm text-left">
                                <thead className="bg-slate-800 sticky top-0">
                                    <tr>
                                        {['Month', 'Principal', 'Interest', 'Balance'].map(h => 
                                            <th key={h} scope="col" className="px-4 py-2 text-gray-300 font-medium whitespace-nowrap">{h}</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {calculationResults.schedule.slice(0, 12).map((row: AmortizationData) => (
                                        <tr key={row.month} className="border-b border-slate-700 hover:bg-slate-700/50">
                                            <td className="px-4 py-2">{row.month}</td>
                                            <td className="px-4 py-2 text-green-400">{formatCurrency(row.principal)}</td>
                                            <td className="px-4 py-2 text-red-400">{formatCurrency(row.interest)}</td>
                                            <td className="px-4 py-2">{formatCurrency(row.remainingBalance)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <button 
                        onClick={handleDownload}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Download Full Amortization Schedule (CSV)
                    </button>
                </>
            )}
        </div>
    );
};

export default AmortizationCalculator;