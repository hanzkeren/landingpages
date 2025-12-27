import { Button } from '#app/components/ui/button';

const navItems = [
  { label: 'Produk', href: '#produk' },
  { label: 'Fitur', href: '#fitur' },
  { label: 'Workflow', href: '#workflow' },
];

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-glow">
            W
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Waktu Kit
            </p>
            <p className="text-lg font-semibold">Teamhore Starter</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <Button size="sm" className="rounded-full">
          Mulai Cepat
        </Button>
      </div>
    </header>
  );
};
