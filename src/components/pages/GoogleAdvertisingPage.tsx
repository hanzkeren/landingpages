import Footer from '#app/components/sections/Footer';
import { Navbar } from '#app/components/sections/Navbar';

const GoogleAdvertisingPage = () => {
  return (
    <html lang="id">
      <head>
        <title>Google Advertising</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Layanan Google Advertising untuk kebutuhan iklan yang terukur."
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

export default GoogleAdvertisingPage;
