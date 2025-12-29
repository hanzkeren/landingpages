import Footer from '#app/components/sections/Footer';
import { Navbar } from '#app/components/sections/Navbar';
import { Seo } from '#app/components/Seo';
import { ServicePageLayout } from '#app/components/sections/ServicePageLayout';

const TikTokAdvertisingPage = () => {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Seo
          title="TikTok Advertising"
          description="Strategi iklan TikTok berbasis kreatif yang terstruktur, cepat diuji, dan siap di-scale."
          path="/services/tiktok-advertising"
        />
      </head>
      <body className="min-h-screen">
        <Navbar />
        <ServicePageLayout
          title="TikTok Ads dengan kreatif yang diuji cepat."
          label="TikTok Advertising"
          summary="Kami menyiapkan sistem testing kreatif yang konsisten agar winning ads muncul lebih cepat. Semua eksperimen dicatat, lalu di-scale dengan kontrol ketat."
          heroImage="/cta.svg"
          highlights={[
            {
              title: 'Kreatif terukur',
              description: 'Setiap video punya hipotesis dan metric yang jelas.',
            },
            {
              title: 'Testing cepat',
              description: 'Siklus tes singkat untuk menemukan kombinasi terbaik.',
            },
            {
              title: 'Skalasi aman',
              description: 'Budget naik hanya untuk kreatif dengan pola stabil.',
            },
          ]}
          steps={[
            {
              title: 'Creative mapping',
              description: 'Riset angle, hook, dan format yang sesuai niche Anda.',
            },
            {
              title: 'Launch & learn',
              description: 'Setup campaign dan evaluasi performa harian.',
            },
            {
              title: 'Scale pipeline',
              description: 'Menyiapkan batch kreatif baru untuk menjaga performa.',
            },
          ]}
          deliverables={[
            'Creative brief dan shot list',
            'Matrix testing kreatif',
            'Weekly performance recap',
            'Rencana scaling per batch',
          ]}
          faqs={[
            {
              question: 'Apakah perlu produksi video baru?',
              answer:
                'Idealnya ya. Kami bantu arahan kreatif agar produksi lebih terarah dan cepat.',
            },
            {
              question: 'Apakah bisa handle Spark Ads?',
              answer: 'Bisa. Kami evaluasi konten organik yang layak dijadikan iklan.',
            },
            {
              question: 'Berapa banyak kreatif per minggu?',
              answer:
                'Tergantung target. Biasanya 4-8 varian untuk menjaga pipeline tetap hidup.',
            },
          ]}
        />
        <Footer />
      </body>
    </html>
  );
};

export default TikTokAdvertisingPage;
