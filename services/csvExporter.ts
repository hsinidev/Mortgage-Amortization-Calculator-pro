
import type { AmortizationData } from '../types';

export const exportToCSV = (headers: string[], data: AmortizationData[], filename: string): void => {
  if (!data || data.length === 0) {
    console.error("No data to export.");
    return;
  }

  const csvRows: string[] = [];
  csvRows.push(headers.join(','));

  for (const row of data) {
    const values = [
      row.month,
      row.payment.toFixed(2),
      row.principal.toFixed(2),
      row.interest.toFixed(2),
      row.remainingBalance.toFixed(2)
    ];
    csvRows.push(values.join(','));
  }

  const csvString = csvRows.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.setAttribute('hidden', '');
  a.setAttribute('href', url);
a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};
