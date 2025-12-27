import { MessageSquareText, Zap, TrendingUp, Check, Settings2 } from 'lucide-react';

const Workflow = () => {
  return (
    <section id="workflow" className="py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Alur kerja yang terukur</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ringkas, transparan, dan fokus pada hasil yang bisa diuji.
          </p>
        </div>

        {/* Grid Steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* === STEP 1: DISKUSI (Chat UI) === */}
          <div className="flex flex-col rounded-2xl border bg-background/90 backdrop-blur p-6 shadow-sm transition-all hover:shadow-md">
            {/* Visual Box */}
            <div className="mb-6 flex h-40 w-full flex-col justify-center gap-3 rounded-xl bg-muted/50 p-4 overflow-hidden relative">
              {/* Chat Bubble Kiri (Agency) */}
              <div className="self-start rounded-2xl rounded-tl-none bg-background border border-border px-3 py-2 text-xs text-muted-foreground shadow-sm max-w-[80%]">
                Target market-nya siapa?
              </div>
              {/* Chat Bubble Kanan (Client) */}
              <div className="self-end rounded-2xl rounded-tr-none bg-primary px-3 py-2 text-xs text-primary-foreground shadow-sm max-w-[80%]">
                Gen Z yang suka skincare.
              </div>
              {/* Chat Bubble Kiri (Agency) */}
              <div className="self-start rounded-2xl rounded-tl-none bg-white border border-border px-3 py-2 text-xs text-muted-foreground shadow-sm max-w-[80%]">
                Baik, kita fokus di TikTok Ads.
              </div>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                1
              </div>
              <h3 className="text-xl font-bold">Diskusi & strategi</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Kami memetakan tujuan, audiens, dan batas biaya. Dari sana kami merancang rencana
              kampanye yang realistis dan terukur.
            </p>
          </div>

          {/* === STEP 2: EKSEKUSI (Settings UI) === */}
          <div className="flex flex-col rounded-2xl border bg-background/90 backdrop-blur p-6 shadow-sm transition-all hover:shadow-md">
            {/* Visual Box */}
            <div className="mb-6 flex h-40 w-full flex-col justify-center gap-2 rounded-xl bg-muted/50 p-4 relative overflow-hidden">
              {/* Mockup Card Setting */}
              <div className="w-full rounded-lg bg-background/90 border border-border p-3 shadow-sm">
                <div className="flex items-center justify-between mb-2 border-b pb-2">
                  <span className="text-xs font-semibold text-muted-foreground">
                    Campaign Status
                  </span>
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">Audience</span>
                    <span className="text-[10px] font-bold">Gen-Z (20-35)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">Daily Budget</span>
                    <span className="text-[10px] font-bold">$50.00</span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden mt-1">
                    <div className="h-full w-2/3 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                2
              </div>
              <h3 className="text-xl font-bold">Eksekusi iklan</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Kami menyiapkan akun, tracking, materi iklan, dan peluncuran kampanye di platform yang
              paling relevan.
            </p>
          </div>

          {/* === STEP 3: HASIL (Chart UI) === */}
          <div className="flex flex-col rounded-2xl border bg-background/90 backdrop-blur p-6 shadow-sm transition-all hover:shadow-md">
            {/* Visual Box */}
            <div className="mb-6 flex h-40 w-full items-end justify-between gap-2 rounded-xl bg-muted/50 p-4 px-6 relative overflow-hidden">
              {/* Bar Chart Bars */}
              <div className="w-full bg-primary/20 rounded-t-sm h-[30%]"></div>
              <div className="w-full bg-primary/40 rounded-t-sm h-[50%]"></div>
              <div className="w-full bg-primary/60 rounded-t-sm h-[40%]"></div>
              <div className="w-full bg-primary/80 rounded-t-sm h-[70%]"></div>
              <div className="w-full bg-primary rounded-t-sm h-[90%] relative group">
                {/* Tooltip on Hover */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  ROAS 5.2x
                </div>
              </div>
              {/* Line Decor */}
              <div className="absolute bottom-4 left-0 w-full h-[1px] bg-border z-0"></div>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                3
              </div>
              <h3 className="text-xl font-bold">Hasil & scaling</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pantau hasil lewat dashboard. Saat formula yang menguntungkan sudah stabil, kami
              menaikkan budget secara terukur sampai target tercapai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
