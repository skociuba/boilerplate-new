import First from './sections/First';
import Second from './sections/Second';
import Hero from './components/Hero';
import Nav from './components/Nav';
import {heroContent} from './constants';
const Home: React.FC = () => (
  <>
    <div className="w-full overflow-hidden">
      <Nav />
      Hello
      <Hero heroContent={heroContent} />
      <First />
      <Second />
    </div>
  </>
);

export default Home;
