import Footer from '#app/components/sections/Footer';
import { Navbar } from '#app/components/sections/Navbar';
import { Button } from '#app/components/ui/button';

const KonsultasiPage = () => {
  return (
    <html lang="id">
      <head>
        <title>Konsultasi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Mulai konsultasi dan pilih kanal komunikasi yang paling nyaman untuk Anda."
        />
      </head>
      <body className="min-h-screen bg-white">
        <Navbar />
        <main className="container mx-auto max-w-3xl px-4 py-32 text-center md:px-6">
          <h1 className="mb-4 text-3xl font-semibold md:text-5xl">Mulai Konsultasi</h1>
          <p className="mb-8 text-muted-foreground md:text-lg">
            Jelaskan kebutuhan iklan Anda, kami bantu merapikan strategi dan langkah terbaik.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="https://t.me/teamhore" target="_blank" rel="noreferrer">
                Chat via Telegram
              </a>
            </Button>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default KonsultasiPage;
