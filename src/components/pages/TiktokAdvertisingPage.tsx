import Footer from '#app/components/sections/Footer';
import { Navbar } from '#app/components/sections/Navbar';

const TikTokAdvertisingPage = () => {
  return (
    <html lang="id">
      <head>
        <title>TikTok Advertising</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Layanan TikTok Advertising untuk kampanye berbasis kreatif."
        />
      </head>
      <body className="min-h-screen bg-white">
        <Navbar />
        <main className="min-h-screen" />
        <Footer />
      </body>
    </html>
  );
};

export default TikTokAdvertisingPage;
