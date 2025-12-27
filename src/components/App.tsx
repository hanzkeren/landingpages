import CTA from '#app/components/sections/CTA';
import Features from '#app/components/sections/Features';
import Footer from '#app/components/sections/Footer';
import { Hero } from '#app/components/sections/Hero';
import { Navbar } from '#app/components/sections/Navbar';
import Workflow from '#app/components/sections/Workflow';

const App = () => {
  return (
    <html lang="id">
      <head>
        <title>Teamhore: partner untuk bisnis yang ambisius</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Jasa iklan Google, TikTok, dan Meta dengan tim berpengalaman di berbagai bidang bisnis."
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
