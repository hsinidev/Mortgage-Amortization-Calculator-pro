
import type { AmortizationData } from '../types';

export const calculateMonthlyPayment = (
  principal: number,
  annualRate: number,
  termYears: number
): number => {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = termYears * 12;

  if (monthlyRate === 0) {
    return principal / numberOfPayments;
  }

  const monthlyPayment =
    principal *
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  return monthlyPayment;
};

export const generateAmortizationSchedule = (
  principal: number,
  annualRate: number,
  termYears: number,
  monthlyPayment: number
): AmortizationData[] => {
  const schedule: AmortizationData[] = [];
  let remainingBalance = principal;
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = termYears * 12;

  for (let i = 1; i <= numberOfPayments; i++) {
    if (remainingBalance <= 0) break;
    
    const interestPaid = remainingBalance * monthlyRate;
    let principalPaid = monthlyPayment - interestPaid;
    
    if (remainingBalance < monthlyPayment) {
        principalPaid = remainingBalance;
        monthlyPayment = remainingBalance + interestPaid;
    }
    
    remainingBalance -= principalPaid;

    if (remainingBalance < 0.01) { // Handle floating point inaccuracies
      principalPaid += remainingBalance;
      remainingBalance = 0;
    }

    schedule.push({
      month: i,
      payment: monthlyPayment,
      principal: principalPaid,
      interest: interestPaid,
      remainingBalance: remainingBalance,
    });
  }

  return schedule;
};
