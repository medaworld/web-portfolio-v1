import { useEffect, useState } from 'react';
import {
  AboutText,
  AboutTitle,
  AboutContainer,
  AboutContent,
} from '../../../styles/components/Mobile/Hero';

function About() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(function mount() {
    function onScroll(event: any) {
      const { documentElement } = event.srcElement;

      // Sets title translate. When scrollTop = clientHeight, it is a window down (slide 2) aka scrollPercent = 100
      // if (documentElement.scrollTop <= documentElement.clientHeight) {
      setScrollPercent(
        (documentElement.scrollTop / documentElement.clientHeight) * 100
      );

      if (scrollPercent > 50) {
        setShowTitle(true);
      } else {
        setShowTitle(false);
      }
    }

    window.addEventListener('scroll', onScroll);
    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <AboutContainer>
      <AboutContent>
        <AboutTitle showTitle={showTitle}>ABOUT</AboutTitle>
        <AboutText>
          Front-end web developer enthusiastic in building exceptional user
          experiences. UCLA alumni with a passion in design, technology,
          photography and music.
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;
