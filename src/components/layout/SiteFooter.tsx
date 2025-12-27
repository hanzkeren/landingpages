export const SiteFooter = () => {
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <p>(c) 2025 Teamhore. Starterkit Waku + Shadcn.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#produk" className="transition-colors hover:text-foreground">
            Produk
          </a>
          <a href="#fitur" className="transition-colors hover:text-foreground">
            Fitur
          </a>
          <a href="#workflow" className="transition-colors hover:text-foreground">
            Workflow
          </a>
        </div>
      </div>
    </footer>
  );
};
