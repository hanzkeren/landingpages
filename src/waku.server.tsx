import adapter from 'waku/adapters/default';
import { Slot } from 'waku/minimal/client';
import App from './components/App';
import GoogleAdvertisingPage from './components/pages/GoogleAdvertisingPage';
import KonsultasiPage from './components/pages/KonsultasiPage';
import MetaAdvertisingPage from './components/pages/MetaAdvertisingPage';
import TikTokAdvertisingPage from './components/pages/TiktokAdvertisingPage';

const PAGES: Record<string, JSX.Element> = {
  '/': <App />,
  '/services/google-advertising': <GoogleAdvertisingPage />,
  '/services/tiktok-advertising': <TikTokAdvertisingPage />,
  '/services/meta-advertising': <MetaAdvertisingPage />,
  '/konsultasi': <KonsultasiPage />,
};

export default adapter({
  handleRequest: async (input, { renderRsc, renderHtml }) => {
    if (input.type === 'component') {
      if ('pathname' in input && input.pathname in PAGES) {
        return renderRsc({ App: PAGES[input.pathname] });
      }
      return renderRsc({ App: <App /> });
    }
    if (input.type === 'custom' && input.pathname in PAGES) {
      return renderHtml(await renderRsc({ App: PAGES[input.pathname] }), <Slot id="App" />, {
        rscPath: '',
      });
    }
  },
  handleBuild: async () => {},
});
