import CTA from '#app/components/sections/CTA';
import Features from '#app/components/sections/Features';
import Footer from '#app/components/sections/Footer';
import { Hero } from '#app/components/sections/Hero';
import { Navbar } from '#app/components/sections/Navbar';
import Workflow from '#app/components/sections/Workflow';
import { Seo } from '#app/components/Seo';

const App = () => {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Seo
          title="Partner untuk bisnis yang ambisius"
          description="Jasa iklan Google, TikTok, dan Meta dengan strategi rapi, eksekusi disiplin, dan laporan transparan."
          path="/"
          includeWebSiteSchema
        />
      </head>
      <body className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Workflow />
          <CTA />
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default App;
