import Footer from '#app/components/sections/Footer';
import { Navbar } from '#app/components/sections/Navbar';
import { Button } from '#app/components/ui/button';
import { Card } from '#app/components/ui/card';
import { Seo } from '#app/components/Seo';

const KonsultasiPage = () => {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Seo
          title="Konsultasi"
          description="Mulai konsultasi dengan tim Teamhore. Pilih kanal komunikasi yang paling nyaman untuk Anda."
          path="/konsultasi"
        />
      </head>
      <body className="min-h-screen">
        <Navbar />
        <main className="pt-32">
          <section className="container mx-auto max-w-5xl px-4 py-16 text-center md:px-6">
            <div className="mx-auto max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Konsultasi
              </div>
              <h1 className="text-4xl font-semibold md:text-6xl">
                Mulai konsultasi tanpa ribet.
              </h1>
              <p className="text-muted-foreground md:text-lg">
                Ceritakan tujuan iklan Anda, kami bantu menyusun strategi dan langkah awal yang
                realistis.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="https://t.me/teamhore" target="_blank" rel="noreferrer">
                    Chat via Telegram
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="mailto:hello@teamhore.id">Email Tim</a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Respon cepat di jam kerja. Tidak ada kontrak panjang.
              </p>
            </div>
          </section>

          <section>
            <div className="container mx-auto max-w-5xl px-4 pb-20 md:px-6">
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: 'Audit singkat',
                    desc: 'Review cepat akun iklan atau funnel untuk melihat potensi terdekat.',
                  },
                  {
                    title: 'Rencana awal',
                    desc: 'Kami susun langkah 2-4 minggu pertama yang bisa segera dieksekusi.',
                  },
                  {
                    title: 'Follow-up jelas',
                    desc: 'Ringkasan diskusi dan next-step yang bisa dibawa ke tim internal.',
                  },
                ].map((item) => (
                  <Card key={item.title} className="border-border/60 bg-white p-6">
                    <div className="text-sm font-semibold">{item.title}</div>
                    <p className="mt-3 text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default KonsultasiPage;
