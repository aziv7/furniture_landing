import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Inspiration from './sections/Inspiration';
import LearnMore from './sections/LearnMore';
import BrowseRange from './sections/BrowseRange';
import HowItWorks from './sections/HowItWorks';
function App() {
  return (
    <div className='lg:max-w-7xl m-0 mx-auto min-h-screen overflow-x-hidden'>
      <Header />
      <Hero />
      <Services />
      <Inspiration />
      <LearnMore />
      <BrowseRange />
      <HowItWorks />
    </div>
  );
}

export default App;
