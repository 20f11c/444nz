import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import ScriptsSection from './components/ScriptsSection.jsx';
import Footer from './components/Footer.jsx';
import { repoInfo, scripts } from './data/siteData.js';

export default function App() {
  return (
    <>
      <Navbar repoUrl={repoInfo.url} />

      <main id="top" className="container page-wrap py-4 py-md-5">
        <HeroSection repo={repoInfo} scripts={scripts} />
        <ScriptsSection scripts={scripts} />
      </main>

      <Footer repo={repoInfo} />
    </>
  );
}
