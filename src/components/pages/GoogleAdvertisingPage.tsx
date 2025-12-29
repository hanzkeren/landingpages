import Footer from '#app/components/sections/Footer';
import { Navbar } from '#app/components/sections/Navbar';
import { Seo } from '#app/components/Seo';
import { ServicePageLayout } from '#app/components/sections/ServicePageLayout';

const GoogleAdvertisingPage = () => {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Seo
          title="Google Advertising"
          description="Layanan Google Ads dengan struktur kampanye yang rapi, optimasi berbasis data, dan laporan yang mudah dipahami."
          path="/services/google-advertising"
        />
      </head>
      <body className="min-h-screen">
        <Navbar />
        <ServicePageLayout
          title="Google Ads yang fokus pada intent dan hasil."
          label="Google Advertising"
          summary="Kami membangun struktur kampanye Google Ads yang jelas, mudah diaudit, dan siap di-scale. Fokus pada intent tinggi, landing page yang relevan, serta kontrol budget yang ketat."
          heroImage="/hero.svg"
          highlights={[
            {
              title: 'Struktur rapi',
              description:
                'Ad group disusun berdasarkan intent untuk menjaga relevansi dan menekan CPC.',
            },
            {
              title: 'Kontrol budget',
              description: 'Eksperimen dilakukan bertahap agar biaya tetap aman dan terukur.',
            },
            {
              title: 'Laporan jelas',
              description: 'Anda tahu apa yang berubah, kenapa diubah, dan dampaknya.',
            },
          ]}
          steps={[
            {
              title: 'Audit & riset',
              description: 'Mapping keyword, kompetitor, dan peluang demand yang realistis.',
            },
            {
              title: 'Setup & launch',
              description: 'Struktur kampanye, tracking, dan creative asset siap dijalankan.',
            },
            {
              title: 'Optimasi mingguan',
              description: 'Iterasi bidding, keyword, dan audience berdasarkan performa.',
            },
          ]}
          deliverables={[
            'Struktur kampanye dan keyword map',
            'Dashboard performa mingguan',
            'Rekomendasi landing page',
            'Laporan optimasi & eksperimen',
          ]}
          faqs={[
            {
              question: 'Apakah bisa handle Performance Max?',
              answer:
                'Bisa. Kami evaluasi apakah PMax relevan, lalu menyiapkan asset dan sinyal audiens yang tepat.',
            },
            {
              question: 'Berapa lama sampai hasil terlihat?',
              answer:
                'Biasanya 2-4 minggu untuk pola awal, tergantung budget dan kondisi akun sebelumnya.',
            },
            {
              question: 'Apakah termasuk tracking conversion?',
              answer:
                'Ya. Kami bantu setup tracking agar data yang masuk benar-benar bisa dipakai.',
            },
          ]}
        />
        <Footer />
      </body>
    </html>
  );
};

export default GoogleAdvertisingPage;
