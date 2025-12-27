import { Button } from '#app/components/ui/button';
import { ArrowRight, Search, MousePointerClick } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        {/* 1. LAYOUT DIPERLEBAR (max-w-7xl) */}
        <div className="group w-full border rounded-3xl overflow-hidden bg-background shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* === KOLOM KIRI (TEKS) === */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-8 z-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-balance">
                  Pastikan bisnis Anda terlihat di halaman pertama.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Kompetitor sudah mengambil traffic bernilai di halaman atas. Kami bantu menyiapkan
                  strategi, struktur akun, dan eksekusi yang rapi.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="font-bold h-12 px-8 text-base shadow-lg shadow-primary/20"
                >
                  Mulai top up
                  <ArrowRight className="ml-2 size-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                  Konsultasi WA
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4">
                <MousePointerClick className="size-4" />
                <span>Dipercaya ratusan bisnis yang ingin tumbuh stabil.</span>
              </div>
            </div>

            {/* === KOLOM KANAN: CLIPPER === */}
            {/* 2. GARIS PEMBATAS DIHILANGKAN (border dihapus) */}
            <div className="relative h-[500px] w-full overflow-hidden">
              {/* CHILD (ILUSTRASI) */}
              <div className="absolute top-12 left-8 right-8 bg-muted/10 rounded-t-xl border border-border/70 transition-transform duration-300 group-hover:scale-[1.02]">
                {/* A. Browser Header */}
                <div className="border-b bg-muted/30 p-4 flex items-center gap-4 rounded-t-xl">
                  <span className="font-bold text-lg tracking-tight hidden sm:block select-none">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                  </span>
                  <div className="flex-1 flex items-center gap-3 rounded-full border bg-background px-4 py-2 shadow-sm">
                    <Search className="size-4 text-muted-foreground" />
                    <span className="text-xs sm:text-sm text-foreground font-medium truncate">
                      Jasa Renovasi Rumah Terbaik
                    </span>
                  </div>
                </div>

                {/* B. Content Body */}
                <div className="p-6 space-y-8 bg-background pb-12">
                  {/* IKLAN KITA */}
                  <div className="relative p-5 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-background shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-bold text-[10px] sm:text-xs text-primary">
                        Sponsored
                      </span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground">
                        teamhore.com
                      </span>
                    </div>
                    <h3 className="text-lg text-blue-700 font-medium hover:underline cursor-pointer mb-2">
                      Jasa renovasi rumah terpercaya - bergaransi
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Gratis survei dan konsultasi. Tim profesional berpengalaman 10 tahun.
                    </p>
                    <MousePointerClick className="absolute bottom-4 right-4 size-6 text-primary animate-bounce" />
                  </div>

                  {/* LIST KOMPETITOR */}
                  <div className="space-y-8 opacity-60 pointer-events-none select-none">
                    {/* 1 */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="size-5 rounded-full bg-muted"></div>
                        <span className="text-[10px] text-muted-foreground">
                          kompetitor-lama.com
                        </span>
                      </div>
                      <h3 className="text-base text-blue-800 font-medium mb-1">
                        Tukang Bangunan Murah Jakarta
                      </h3>
                    </div>

                    {/* 2 */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="size-5 rounded-full bg-muted"></div>
                        <span className="text-[10px] text-muted-foreground">
                          direktori-bisnis.com
                        </span>
                      </div>
                      <h3 className="text-base text-blue-800 font-medium mb-1">
                        10 Daftar Jasa Renovasi Terbaik 2025
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        Daftar rekomendasi penyedia jasa renovasi...
                      </p>
                    </div>

                    {/* 3 (Mulai kepotong) */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="size-5 rounded-full bg-muted"></div>
                        <span className="text-[10px] text-muted-foreground">
                          forum-properti.net
                        </span>
                      </div>
                      <h3 className="text-base text-blue-800 font-medium mb-1">
                        Diskusi: Biaya Renovasi per Meter?
                      </h3>
                    </div>

                    {/* 4 (Pasti Hilang) */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="size-5 rounded-full bg-muted"></div>
                        <span className="text-[10px] text-muted-foreground">
                          berita-konstruksi.id
                        </span>
                      </div>
                      <h3 className="text-base text-blue-800 font-medium mb-1">
                        Tips Memilih Vendor Renovasi
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
