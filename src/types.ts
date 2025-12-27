export interface StatMetric {
  label: string;
  value: string;
  subtext: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

export interface ReportRow {
  date: string;
  accountId: string;
  spend: number;
  clicks: number;
  impressions: number;
  conversions: number;
}
