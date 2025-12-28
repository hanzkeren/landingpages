import { FaArrowUpRightDots } from 'react-icons/fa6';
import { Activity, DollarSign, Target, Users } from 'lucide-react';
import DataTable from '#app/components/DataTable';
import StatCard from '#app/components/StatCard';

const METRICS = [
  {
    label: 'Biaya',
    value: '$12.4k',
    subtext: 'Stabil 7 hari terakhir',
    icon: <DollarSign className="size-4" />,
  },
  {
    label: 'Leads',
    value: '1,284',
    subtext: 'Kualitas konsisten',
    icon: <Target className="size-4" />,
  },
  {
    label: 'Click rate',
    value: '3.8%',
    subtext: 'Naik dari minggu lalu',
    icon: <Activity className="size-4" />,
  },
  {
    label: 'Audiens',
    value: '98.2k',
    subtext: 'Jangkauan relevan',
    icon: <Users className="size-4" />,
  },
];

const REPORT_ROWS = [
  {
    date: '12 Mar',
    accountId: 'G-0123',
    spend: 1240,
    clicks: 1820,
    impressions: 28400,
    conversions: 132,
  },
  {
    date: '13 Mar',
    accountId: 'G-0123',
    spend: 980,
    clicks: 1490,
    impressions: 24100,
    conversions: 118,
  },
  {
    date: '14 Mar',
    accountId: 'T-0452',
    spend: 760,
    clicks: 1120,
    impressions: 20500,
    conversions: 96,
  },
  {
    date: '15 Mar',
    accountId: 'M-2210',
    spend: 1320,
    clicks: 1980,
    impressions: 31200,
    conversions: 154,
  },
  {
    date: '16 Mar',
    accountId: 'M-2210',
    spend: 890,
    clicks: 1340,
    impressions: 22900,
    conversions: 121,
  },
];

const Feature = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        {/* === HEADER SECTION === */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Layanan iklan yang bergerak dengan data
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Satu tim spesialis untuk Google, TikTok, dan Meta. Strategi rapi, eksekusi disiplin, dan
            laporan yang mudah dibaca.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* === GRID SERVICES === */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-3xl border bg-background/90 backdrop-blur p-8 h-[320px] transition-all hover:shadow-lg">
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Google Ads</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-[80%]">
                    Tampil di momen niat beli tertinggi. Iklan Anda hadir saat calon pelanggan
                    sedang mencari solusi.
                  </p>
                </div>
                <div className="flex items-center text-sm font-semibold text-foreground cursor-pointer hover:underline">
                  Lihat strateginya <FaArrowUpRightDots className="ml-1 size-4" />
                </div>
              </div>

              {/* LOGO GOOGLE (File: /google.svg) */}
              {/* Diposisikan Absolute di pojok kanan bawah biar kepotong */}
              <img
                src="/google.svg"
                alt="Google Ads"
                className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 "
              />
            </div>

            {/* GRID 2: TIKTOK ADS */}
            <div className="group relative overflow-hidden rounded-3xl border bg-background/90 backdrop-blur p-8 h-[320px] transition-all hover:shadow-lg">
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-3">TikTok Ads</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-[80%]">
                    Konten singkat, dampak panjang. Kreatif relevan yang mendorong reach dan aksi
                    yang bisa dihitung.
                  </p>
                </div>
                <div className="flex items-center text-sm font-semibold text-foreground cursor-pointer hover:underline">
                  Lihat strateginya <FaArrowUpRightDots className="ml-1 size-4" />
                </div>
              </div>

              {/* LOGO TikTok (File: /tiktok.svg) */}
              {/* Diposisikan Absolute di pojok kanan bawah biar kepotong */}
              <img
                src="/tiktok.svg"
                alt="TikTok Ads"
                className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 "
              />
            </div>

            {/* GRID 3: META ADS */}
            <div className="group relative overflow-hidden rounded-3xl border bg-background/90 backdrop-blur p-8 h-[320px] transition-all hover:shadow-lg">
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Meta Ads</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-[80%]">
                    Skala cepat di Facebook dan Instagram. Segmentasi tajam, kreatif variatif, dan
                    pengendalian biaya yang konsisten.
                  </p>
                </div>
                <div className="flex items-center text-sm font-semibold text-foreground cursor-pointer hover:underline">
                  Lihat strateginya <FaArrowUpRightDots className="ml-1 size-4" />
                </div>
              </div>

              {/* LOGO META (File: /facebook.svg) */}
              {/* Diposisikan Absolute di pojok kanan bawah biar kepotong */}
              <img
                src="/facebook.svg"
                alt="Meta Ads"
                className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 "
              />
            </div>
          </div>

          {/* === MAIN FEATURE: DASHBOARD === */}
          <div className="group relative h-[320px] lg:h-[620px] border flex flex-col rounded-3xl bg-muted/20 p-6 md:p-10 overflow-hidden mt-4 transition-all hover:shadow-lg">
            <div className="w-full max-w-4xl mb-8 flex-shrink-0">
              <h3 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl text-foreground">
                Satu dashboard, semua angka jernih
              </h3>
              <p className="text-muted-foreground text-base md:text-lg text-pretty max-w-2xl">
                Lihat biaya, leads, dan ROAS secara real time tanpa kerepotan. Semua kampanye
                terkonsolidasi rapi.
              </p>
            </div>

            <div className="relative flex-1 min-h-[440px] lg:min-h-[640px] w-full overflow-hidden rounded-t-xl border bg-muted/30 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="flex items-center gap-1.5 border-b bg-muted/50 px-4 py-3">
                <div className="size-2.5 rounded-full bg-red-500/20"></div>
                <div className="size-2.5 rounded-full bg-yellow-500/20"></div>
                <div className="size-2.5 rounded-full bg-green-500/20"></div>
              </div>

              <div className="relative flex-1 overflow-hidden bg-muted/10 p-6">
                <div className="grid h-full gap-6 md:grid-cols-2">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {METRICS.map((metric) => (
                      <StatCard key={metric.label} metric={metric} className="min-h-[140px]" />
                    ))}
                  </div>
                  <DataTable data={REPORT_ROWS} title="Ringkasan Performa" className="h-full" />
                </div>
                <div className="pointer-events-none absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
