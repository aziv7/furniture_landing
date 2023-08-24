import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Inspiration from './sections/Inspiration';
function App() {
  return (
    <div className='lg:max-w-7xl m-0 mx-auto min-h-screen'>
      <Header />
      <Hero />
      <Services />
      <Inspiration />
    </div>
  );
}

export default App;
