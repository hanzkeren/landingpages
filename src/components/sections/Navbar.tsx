'use client';

import { ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '#app/lib/utils';
import { Button } from '#app/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '#app/components/ui/navigation-menu';

const ITEMS = [
  {
    label: 'Layanan',
    href: '#',
    dropdownItems: [
      {
        title: 'Google Advertising',
        href: '/services/google-advertising',
        description: 'Optimasi Google Ads untuk mendatangkan leads dan penjualan yang terukur.',
      },
      {
        title: 'TikTok Advertising',
        href: '/services/tiktok-advertising',
        description: 'Strategi iklan TikTok berbasis kreatif agar performa cepat scaling.',
      },
      {
        title: 'Meta Advertising',
        href: '/services/meta-advertising',
        description: 'Kampanye Meta Ads yang fokus pada reach, engagement, dan konversi.',
      },
    ],
  },
  { label: 'Tentang kami', href: '#' },
  { label: 'Kontak', href: '/konsultasi' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // WRAPPER UTAMA: Mengatur posisi Fixed & Center
    <header className="fixed top-5 left-1/2 z-50 w-[95%] max-w-[850px] -translate-x-1/2">
      {/* NAVBAR BAR */}
      <div className="flex items-center justify-between rounded-full border bg-background/80 px-4 py-2 shadow-sm backdrop-blur-lg">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-2 px-2">
          <img src="/logo.svg" alt="logo" className="w-8" />
          <span className="font-bold">Teamhore.</span>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {ITEMS.map((link) => (
              <NavigationMenuItem key={link.label}>
                {link.dropdownItems ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent h-9 px-4 hover:bg-muted/50">
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {link.dropdownItems.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{item.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground outline-none"
                  >
                    {link.label}
                  </a>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions (CTA + Mobile Toggle) */}
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden rounded-full md:inline-flex">
            <a href="/konsultasi">Hubungi Kami</a>
          </Button>

          {/* Mobile Hamburger */}
          <Button variant="ghost" size="sm" className="h-9 w-9 p-0 md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {/* Dipisah dari div utama agar animasi/layout tidak menumpuk */}
      <div
        className={cn(
          'absolute top-[calc(100%+0.5rem)] left-0 w-full overflow-hidden rounded-2xl border bg-background shadow-lg transition-all duration-300 md:hidden',
          isMenuOpen
            ? 'max-h-[80vh] opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-2 invisible'
        )}
      >
        <nav className="flex flex-col p-4 space-y-1 overflow-y-auto max-h-[70vh]">
          {ITEMS.map((link) => (
            <div key={link.label}>
              {link.dropdownItems ? (
                <div className="space-y-1">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="flex w-full items-center justify-between rounded-md p-3 text-sm font-medium hover:bg-muted"
                  >
                    {link.label}
                    <ChevronRight
                      className={cn(
                        'size-4 transition-transform',
                        openDropdown === link.label ? 'rotate-90' : ''
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all text-sm',
                      openDropdown === link.label
                        ? 'max-h-96 opacity-100 mb-2'
                        : 'max-h-0 opacity-0'
                    )}
                  >
                    <div className="ml-2 border-l pl-2 space-y-1">
                      {link.dropdownItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="block rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <p className="font-medium text-foreground">{item.title}</p>
                          <span className="text-xs">{item.description}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  className="block rounded-md p-3 text-sm font-medium hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-2 border-t pt-4">
            <Button asChild className="w-full">
              <a href="/konsultasi" onClick={() => setIsMenuOpen(false)}>
                Hubungi Kami
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export { Navbar };
