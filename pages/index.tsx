import Hero from '../components/Desktop/Hero/Hero';
import Skills from '../components/Desktop/Skills/Skills';
import Work from '../components/Desktop/Work/Work';
import { Main } from '../styles';
export default function Home() {
  return (
    <Main>
      <Hero />
      <Work />
      <Skills />
    </Main>
  );
}
