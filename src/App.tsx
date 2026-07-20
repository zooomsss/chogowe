import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import ReactionWall from '@/components/ReactionWall';
import ArtAlbums from '@/components/ArtAlbums';
import Contact from '@/components/Contact';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <Hero />
      <About />
      <ArtAlbums />
      <ReactionWall />
      <Skills />
      <Contact />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
