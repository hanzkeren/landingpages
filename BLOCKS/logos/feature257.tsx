import { CardSpotlight } from '#app/components/aceternity/card-spotlight';

interface Feature257Props {
  category: string;
  name: string;
  logo: string;
}

const TOOLS: Feature257Props[] = [
  {
    category: 'STATIC SITE GENERATOR',
    name: 'Astro',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg',
  },
  {
    category: 'STATIC SITE GENERATOR',
    name: 'Gatsby',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gatsby-icon-black.svg',
  },
  {
    category: 'VERSION CONTROL',
    name: 'GitHub',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon-black.svg',
  },
  {
    category: 'REACT FRAMEWORK',
    name: 'Next.js',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-icon.svg',
  },
  {
    category: 'UI DESIGN',
    name: 'Figma',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma.svg',
  },
  {
    category: 'REACT FRAMEWORK',
    name: 'Remix',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/remix-icon-black.svg',
  },
  {
    category: 'DEPLOYMENT',
    name: 'Vercel',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-icon.svg',
  },
  {
    category: 'CSS FRAMEWORK',
    name: 'Tailwind CSS',
    logo: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon-black.svg',
  },
];

const Feature257 = () => {
  return (
    <section className="bg-muted py-16 sm:py-32">
      <div className="container">
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {TOOLS.map((tool, index) => (
              <CardSpotlight
                key={index}
                className="bg-background border-border group flex min-h-[20rem] flex-col items-start justify-between rounded-md border p-4 transition-all duration-300 hover:bg-black hover:text-white"
              >
                <div className="border-border rounded-md border px-3 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-white sm:text-sm">
                  {tool.category}
                </div>
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="mx-auto mb-4 h-24 object-contain transition-all duration-300 [filter:brightness(0)] group-hover:[filter:brightness(1)_invert(1)] sm:h-28 sm:w-28 dark:invert"
                />
                <h2 className="text-xl font-normal transition-colors duration-300 sm:text-2xl">
                  {tool.name}
                </h2>
              </CardSpotlight>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="mx-auto max-w-6xl px-8 pb-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {TOOLS.slice(0, 2).map((tool, index) => (
                <CardSpotlight
                  key={index}
                  className="bg-background border-border group flex h-96 flex-col items-start justify-between rounded-md border p-2 transition-all duration-300 hover:bg-black hover:text-white md:p-4"
                >
                  <div className="border-border rounded-md border px-2 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-white md:px-4 md:py-2 md:text-sm">
                    {tool.category}
                  </div>
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="mx-auto mb-4 h-24 object-contain transition-all duration-300 [filter:brightness(0)] group-hover:[filter:brightness(1)_invert(1)] dark:invert"
                  />
                  <h2 className="text-xl font-normal transition-colors duration-300 lg:text-3xl">
                    {tool.name}
                  </h2>
                </CardSpotlight>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-8 pb-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {TOOLS.slice(2, 9).map((tool, index) => (
                <CardSpotlight
                  key={index}
                  className="bg-background border-border group flex h-96 flex-col items-start justify-between rounded-md border p-2 transition-all duration-300 hover:bg-black hover:text-white md:p-4"
                >
                  <div className="border-border rounded-md border px-2 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-white md:px-4 md:py-2 md:text-sm">
                    {tool.category}
                  </div>
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="mx-auto mb-4 h-24 object-contain transition-all duration-300 [filter:brightness(0)] group-hover:[filter:brightness(1)_invert(1)] dark:invert"
                  />
                  <h2 className="text-xl font-normal transition-colors duration-300 lg:text-3xl">
                    {tool.name}
                  </h2>
                </CardSpotlight>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature257 };
