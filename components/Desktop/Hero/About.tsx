import { useEffect, useState } from 'react';
import {
  AboutText,
  AboutTitle,
  AboutContainer,
} from '../../../styles/components/Desktop/Hero';

function About() {
  const [scrollPercent, setScrollPercent] = useState(0);
  useEffect(function mount() {
    function onScroll(event: any) {
      const { body, documentElement } = event.srcElement;
      const sd = Math.max(body.scrollTop, documentElement.scrollTop);
      const sp =
        (sd / (documentElement.scrollHeight - documentElement.clientHeight)) *
        100;
      const maxlimit =
        (documentElement.clientHeight * 150) / documentElement.scrollHeight;
      if (sp >= 0 && sp <= maxlimit) {
        setScrollPercent(sp);
      }
    }
    window.addEventListener('scroll', onScroll);
    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <AboutContainer>
      <AboutTitle scrollPercent={scrollPercent}>ABOUT</AboutTitle>
      <AboutText>
        Front-end web developer dedicated to building exceptional user
        experiences. UCLA graduate with creative passion in design, technology,
        photography and music.
      </AboutText>
    </AboutContainer>
  );
}

export default About;
