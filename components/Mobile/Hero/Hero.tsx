import { Container } from '../../../styles/components/Desktop/Hero';
import About from './About';
import Intro from './Intro';

function MobileHero() {
  return (
    <Container>
      <Intro />
      <About />
    </Container>
  );
}

export default MobileHero;
