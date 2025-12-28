import { Globe } from 'lucide-react';

import { Button } from '#app/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative mx-auto flex max-w-xl flex-col items-center justify-center py-10 text-center">
          <h1 className="mb-3 text-4xl lg:text-7xl">Partner Untuk Bisnis Yang Ambisius</h1>
          <p className="mb-5 text-sm text-muted-foreground md:text-base">
            Stabilitas selalu menjadi prioritas, bukan sekadar janji. Setiap iklan dijalankan dengan
            strategi jelas, kontrol penuh, dan evaluasi rutin agar biaya iklan benar-benar bekerja
            secara aman dan terukur.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <a href="/konsultasi">Hubungi Kami</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#workflow">Cara Bekerjasama</a>
            </Button>
          </div>
          <div className="mt-7 flex items-start justify-center gap-2 font-medium md:text-xl">
            <Globe className="mt-0.5 h-auto w-5" />
            Bukan Sekedar Jasa Iklan Biasa
          </div>
        </div>
        <div className="-mt-32 overflow-hidden py-8">
          <div className="relative flex w-full justify-center">
            <img
              src="/heromemek.svg"
              alt="Hero"
              width={1200}
              height={800}
              loading="eager"
              className="relative w-full object-contain max-w-[900px] xl:max-w-[1200px] translate-y-[50px] md:translate-y-[10px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
