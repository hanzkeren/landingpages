import { ArrowDownRight } from 'lucide-react';

import { Button } from '#app/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Teamhore
            </div>
            <h1 className="my-6 text-pretty text-4xl font-semibold lg:text-6xl">
              Partner iklan digital untuk bisnis yang ambisius dan ingin rapi.
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-lg">
              Kami merapikan strategi iklan agar biaya bekerja lebih aman dan terukur. Fokus pada
              kontrol, evaluasi mingguan, dan pertumbuhan yang bisa dipertanggungjawabkan.
            </p>
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <a href="/konsultasi">Hubungi Kami</a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href="#workflow" className="inline-flex items-center gap-2">
                  Cara Bekerja
                  <ArrowDownRight className="size-4" />
                </a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground lg:justify-start">
              <span>Dipercaya tim growth di berbagai niche.</span>
              <div className="flex items-center gap-4 opacity-70">
                <img src="/google.svg" alt="Google" className="h-5 w-auto" />
                <img src="/tiktok.svg" alt="TikTok" className="h-5 w-auto" />
                <img src="/facebook.svg" alt="Meta" className="h-5 w-auto" />
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[560px]">
            <img
              src="/hero.svg"
              alt="Ilustrasi hero"
              width={1200}
              height={800}
              loading="eager"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
