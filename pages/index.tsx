import MediaQuery from 'react-responsive';
import Contact from '../components/Desktop/Contact/Contact';
import Hero from '../components/Desktop/Hero/Hero';
import Skills from '../components/Desktop/Skills/Skills';
import Work from '../components/Desktop/Work/Work';
import { Main } from '../styles';
export default function Home() {
  return (
    <>
      <Main>
        {/* <MediaQuery query="(min-device-width: 1024px"> */}
        <Hero />
        <Work />
        <Skills />
        <Contact />
        {/* </MediaQuery> */}
        {/* <MediaQuery query="(max-device-width: 1023px">
          <Hero />
          <Work />
          <Skills />
          <Contact />
        </MediaQuery> */}
      </Main>
    </>
  );
}
