import { Check, Sparkles } from 'lucide-react';

import { Button } from '#app/components/ui/button';
import { Card } from '#app/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '#app/components/ui/accordion';

type ServiceHighlight = {
  title: string;
  description: string;
};

type ServiceStep = {
  title: string;
  description: string;
};

type ServiceFaq = {
  question: string;
  answer: string;
};

type ServicePageLayoutProps = {
  title: string;
  label: string;
  summary: string;
  heroImage: string;
  highlights: ServiceHighlight[];
  steps: ServiceStep[];
  deliverables: string[];
  faqs: ServiceFaq[];
};

const ServicePageLayout = ({
  title,
  label,
  summary,
  heroImage,
  highlights,
  steps,
  deliverables,
  faqs,
}: ServicePageLayoutProps) => {
  return (
    <main className="pt-28">
      <section>
        <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                <Sparkles className="size-3" />
                {label}
              </div>
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
              <p className="text-base text-muted-foreground md:text-lg">{summary}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="/konsultasi">Mulai konsultasi</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#proses">Lihat proses kerja</a>
                </Button>
              </div>
            </div>
            {heroImage === '/hero.svg' ? (
              <div className="mx-auto w-full">
                <img src={heroImage} alt={title} className="h-full w-full object-cover" />
              </div>
            ) : (
              <div className="relative">
                <div className="absolute -inset-6 rounded-[32px] bg-white/70 blur-2xl" />
                <Card className="relative overflow-hidden">
                  <img
                    src={heroImage}
                    alt={title}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title} className="border-border/60 bg-white p-6">
                <div className="text-sm font-semibold">{item.title}</div>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="proses">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Alur kerja
              </div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Proses yang rapi, bisa ditinjau tiap minggu.
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Semua langkah ditulis jelas agar Anda tahu apa yang dikerjakan, kenapa dilakukan,
                dan bagaimana hasilnya diukur.
              </p>
            </div>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <Card key={step.title} className="border-border/60 bg-white p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}. {step.title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Deliverables
              </div>
              <h2 className="text-3xl font-semibold md:text-4xl">Apa yang Anda terima.</h2>
              <p className="text-muted-foreground md:text-lg">
                Output kami fokus pada keputusan. Bukan sekadar laporan, tapi rekomendasi yang bisa
                langsung dieksekusi.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map((item) => (
                <Card key={item} className="border-border/60 bg-white p-4">
                  <div className="flex items-start gap-3 text-sm">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border">
                      <Check className="size-3" />
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl px-4 pb-20 md:px-6">
          <Card className="border-border/60 bg-white p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  FAQ
                </div>
                <h2 className="text-3xl font-semibold md:text-4xl">Pertanyaan yang sering muncul.</h2>
                <p className="text-muted-foreground md:text-lg">
                  Jika ada hal spesifik, tim kami siap menjelaskan dengan detail.
                </p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Card>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl px-4 pb-20 md:px-6">
          <Card className="border-border/60 bg-white p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Mulai sekarang
                </div>
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Butuh strategi yang lebih rapi?
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Mari diskusi singkat, kami susun langkah awal yang realistis untuk 2-4 minggu
                  pertama.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button asChild size="lg">
                  <a href="/konsultasi">Mulai konsultasi</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/tentang-kami">Lihat cara kerja</a>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Tanpa kontrak panjang, laporan mingguan terstruktur.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export { ServicePageLayout };
