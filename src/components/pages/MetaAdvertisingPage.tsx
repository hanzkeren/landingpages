import Footer from '#app/components/sections/Footer';
import { Navbar } from '#app/components/sections/Navbar';
import { Seo } from '#app/components/Seo';
import { ServicePageLayout } from '#app/components/sections/ServicePageLayout';

const MetaAdvertisingPage = () => {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Seo
          title="Meta Advertising"
          description="Strategi Meta Ads yang fokus pada funnel lengkap, dari reach hingga konversi."
          path="/services/meta-advertising"
        />
      </head>
      <body className="min-h-screen">
        <Navbar />
        <ServicePageLayout
          title="Meta Ads yang fokus pada funnel dan konversi."
          label="Meta Advertising"
          summary="Kami menyusun strategi Meta Ads yang terhubung dari awareness sampai conversion. Segmentasi jelas, kreatif terukur, dan laporan yang bisa dipakai untuk keputusan."
          heroImage="/hero.svg"
          highlights={[
            {
              title: 'Funnel lengkap',
              description: 'Awareness, consideration, sampai conversion dalam satu alur.',
            },
            {
              title: 'Audience presisi',
              description: 'Custom, lookalike, dan interest disusun bertahap.',
            },
            {
              title: 'Optimasi konsisten',
              description: 'Iterasi weekly untuk menjaga CPA tetap stabil.',
            },
          ]}
          steps={[
            {
              title: 'Funnel mapping',
              description: 'Menentukan tujuan tiap kampanye dan metric utama.',
            },
            {
              title: 'Creative & setup',
              description: 'Menyiapkan kreatif dan struktur ad set yang rapi.',
            },
            {
              title: 'Scale & review',
              description: 'Optimasi budget dan creative berdasarkan data mingguan.',
            },
          ]}
          deliverables={[
            'Struktur funnel dan audience map',
            'Laporan kreatif dan testing',
            'Optimasi CPA dan ROAS',
            'Catatan eksperimen mingguan',
          ]}
          faqs={[
            {
              question: 'Apakah bisa fokus ke leads?',
              answer: 'Bisa. Kami akan setup form, tracking, dan optimasi CPL.',
            },
            {
              question: 'Bagaimana kalau akun baru?',
              answer:
                'Kami mulai dengan struktur sederhana, lalu scale setelah data cukup kuat.',
            },
            {
              question: 'Apakah termasuk creative testing?',
              answer: 'Ya. Testing kreatif jadi bagian inti dari proses.',
            },
          ]}
        />
        <Footer />
      </body>
    </html>
  );
};

export default MetaAdvertisingPage;
