import Footer from '#app/components/sections/Footer';
import { Navbar } from '#app/components/sections/Navbar';

const MetaAdvertisingPage = () => {
  return (
    <html lang="id">
      <head>
        <title>Meta Advertising</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Layanan Meta Advertising untuk jangkauan dan konversi bisnis."
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

export default MetaAdvertisingPage;
