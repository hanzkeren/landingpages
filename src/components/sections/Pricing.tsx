import { Check, Minus } from 'lucide-react'; // Import icon minus jika ada fitur yg tidak dapat
import { Button } from '#app/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#app/components/ui/card';
import { Badge } from '#app/components/ui/badge';

const Pricing = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        {/* Header: Menjual Konsep "Fair Pricing" */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Biaya transparan, tanpa kontrak bulanan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Biaya layanan hanya dipotong dari setiap top up saldo iklan. Tidak ada biaya langganan
            bulanan dan tidak ada kontrak mengikat.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          {/* === PAKET 1: STARTER (Budget Kecil) === */}
          <Card className="flex flex-col h-full bg-background/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl">Starter</CardTitle>
              <CardDescription>Untuk budget iklan pemula.</CardDescription>
              <div className="mt-4 flex flex-col">
                <span className="text-4xl font-bold">15%</span>
                <span className="text-sm text-muted-foreground">Biaya layanan</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6 p-3 bg-muted rounded-lg text-sm text-center">
                Min. top up: <strong>$100</strong>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Akses dashboard basic
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Setup iklan standar
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Laporan harian
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Prioritas support WA
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Mulai Topup
              </Button>
            </CardFooter>
          </Card>

          {/* === PAKET 2: GROWTH (Best Seller) === */}
          <Card className="flex flex-col h-full border-primary shadow-lg relative lg:-mt-8 lg:mb-8 bg-background/90 backdrop-blur">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <Badge className="bg-primary hover:bg-primary px-4 py-1 text-sm">
                Paling populer
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-primary">Growth</CardTitle>
              <CardDescription>Untuk bisnis yang sedang bertumbuh.</CardDescription>
              <div className="mt-4 flex flex-col">
                <span className="text-5xl font-bold text-primary">10%</span>
                <span className="text-sm text-muted-foreground">Biaya layanan</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              {/* Highlight Minimum Topup */}
              <div className="mb-6 p-3 bg-primary/10 border border-primary/20 rounded-lg text-sm text-center text-primary font-medium">
                Min. top up: <strong>$1,000</strong>
              </div>

              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> <strong>Akses dashboard penuh</strong>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> <strong>Optimasi mingguan</strong>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Konsultasi strategi
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> A/B testing kreatif
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Prioritas support WA
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-8">
              <Button size="lg" className="w-full">
                Mulai bertumbuh
              </Button>
            </CardFooter>
          </Card>

          {/* === PAKET 3: HIGH VOLUME (Nego) === */}
          <Card className="flex flex-col h-full bg-background/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl">High volume</CardTitle>
              <CardDescription>Budget besar dengan fee khusus.</CardDescription>
              <div className="mt-4 flex flex-col">
                <span className="text-3xl font-bold">Spesial</span>
                <span className="text-sm text-muted-foreground">Biaya dapat dinegosiasi</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6 p-3 bg-muted rounded-lg text-sm text-center">
                Min. top up: <strong>$10,000+</strong>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />{' '}
                  <strong>Fee lebih rendah (&#60;10%)</strong>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Dedicated account manager
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Laporan kustom
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" /> Evaluasi rutin
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Hubungi Tim Sales
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Keterangan Tambahan */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground">
            *Fee layanan otomatis dipotong saat Anda melakukan top up. Contoh: top up $1,000, maka
            saldo iklan masuk $950, dan fee layanan $50.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
