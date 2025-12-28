import { Badge } from '#app/components/ui/badge';
import { Button } from '#app/components/ui/button';
import { Card } from '#app/components/ui/card';

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <Card className="border-border/60 bg-background/90 backdrop-blur">
          <div className="grid items-center gap-8 overflow-hidden p-8 md:p-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Siap menumbuhkan bisnis dengan strategi iklan yang rapi?
                </h2>
                <p className="text-base text-muted-foreground md:text-lg">
                  Kami merapikan strategi iklan agar biaya bekerja dengan aman dan terukur. Fokus
                  pada leads berkualitas dengan laporan yang jelas, bukan sekadar impresi.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg">Mulai konsultasi</Button>
                <Button size="lg" variant="outline">
                  Lihat studi kasus
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Tanpa kontrak panjang. Update performa mingguan yang terstruktur.
              </p>
            </div>

            <div className="w-full translate-y-[70px]">
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-background">
                <img
                  src="/cta.svg"
                  alt="CTA"
                  width={800}
                  height={500}
                  className="h-full w-full translate-x-[30px] scale-[1.2] object-cover"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
