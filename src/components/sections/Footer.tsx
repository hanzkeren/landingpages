import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
              <img src="/logo.svg" alt="logo" className="h-8 w-8" />
              Teamhore.
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Partner iklan digital dengan transparansi penuh. Fokus pada pertumbuhan, biar kami
              yang menjaga teknis dan evaluasinya.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="mb-4 font-semibold">Layanan</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Google Ads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  TikTok Ads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Meta Ads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Harga
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="mb-4 font-semibold">Perusahaan</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="/tentang-kami" className="hover:text-foreground">
                  Tentang kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Bantuan
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Kebijakan privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Syarat layanan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Kebijakan refund
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Teamhore Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
            Sistem Operasional: Normal
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
