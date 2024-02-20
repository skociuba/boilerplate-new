import First from './sections/First';
import Second from './sections/Second';
import Hero from './components/Hero';
import Nav from './components/Nav';
const Home: React.FC = () => (
  <>
    <div className="w-full overflow-hidden">
      <Nav />
      <Hero />
      <First />
      <Second />
    </div>
  </>
);

export default Home;
