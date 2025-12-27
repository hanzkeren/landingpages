import React from 'react';
import { ReportRow } from '../types';

interface DataTableProps {
  data: ReportRow[];
  title: string;
  className?: string;
}

const DataTable: React.FC<DataTableProps> = ({ data, title, className = '' }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('id-ID').format(value);
  };

  return (
    <div
      className={`rounded-[2rem] border border-border bg-background/90 shadow-sm backdrop-blur overflow-hidden flex flex-col ${className}`}
    >
      <div className="px-8 py-6 flex justify-between items-center border-b border-border/60">
        <h2 className="text-sm font-bold text-foreground uppercase tracking-widest">{title}</h2>
        <button className="text-[11px] font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
          Ekspor Data
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-muted-foreground text-[10px] uppercase tracking-widest border-b border-border/60">
              <th className="px-8 py-4 text-left font-bold">Tanggal</th>
              <th className="px-8 py-4 text-left font-bold">Akun</th>
              <th className="px-8 py-4 text-right font-bold">Biaya</th>
              <th className="px-8 py-4 text-right font-bold">Konversi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {data.slice(0, 5).map((row, idx) => (
              <tr
                key={`${row.accountId}-${idx}`}
                className="group hover:bg-muted/40 transition-colors"
              >
                <td className="px-8 py-4 text-xs text-muted-foreground">{row.date}</td>
                <td className="px-8 py-4">
                  <span className="text-[11px] font-medium text-muted-foreground">
                    {row.accountId}
                  </span>
                </td>
                <td className="px-8 py-4 text-xs text-right font-bold text-foreground">
                  {formatCurrency(row.spend)}
                </td>
                <td className="px-8 py-4 text-xs text-right font-bold text-primary">
                  {formatNumber(row.conversions)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
