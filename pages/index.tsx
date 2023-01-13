import MediaQuery from 'react-responsive';
import DesktopContact from '../components/Desktop/Contact/Contact';
import DesktopHero from '../components/Desktop/Hero/Hero';
import DesktopSkills from '../components/Desktop/Skills/Skills';
import DesktopWork from '../components/Desktop/Work/Work';
import { Main } from '../styles';
export default function Home() {
  return (
    <>
      <Main>
        {/* <MediaQuery query="(min-device-width: 1024px"> */}
        <DesktopHero />
        <DesktopWork />
        <DesktopSkills />
        <DesktopContact />
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
