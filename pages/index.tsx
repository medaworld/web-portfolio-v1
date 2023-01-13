import DesktopContact from '../components/Desktop/Contact/Contact';
import DesktopHero from '../components/Desktop/Hero/Hero';
import DesktopSkills from '../components/Desktop/Skills/Skills';
import DesktopWork from '../components/Desktop/Work/Work';
import MobileHero from '../components/Mobile/Hero/Hero';
import { DesktopMain, MobileMain } from '../styles';
export default function Home() {
  return (
    <>
      <DesktopMain>
        <DesktopHero />
        <DesktopWork />
        <DesktopSkills />
        <DesktopContact />
      </DesktopMain>
      <MobileMain>
        <MobileHero />
      </MobileMain>
    </>
  );
}
