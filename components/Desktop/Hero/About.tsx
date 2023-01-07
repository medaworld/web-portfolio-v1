import { useEffect, useState } from 'react';
import {
  AboutText,
  AboutTitle,
  AboutContainer,
  BackgroundBlock,
  AboutContent,
} from '../../../styles/components/Desktop/Hero';

function About() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [bgChangePercent, setBgChangePercent] = useState(0);
  const [bgChange, setBgChange] = useState(false);
  useEffect(function mount() {
    function onScroll(event: any) {
      const { documentElement } = event.srcElement;
      const bgChangeStart = documentElement.clientHeight * 0.5;
      const bgChangeEnd = documentElement.clientHeight - bgChangeStart;

      if (documentElement.scrollTop <= documentElement.clientHeight) {
        setScrollPercent(
          (documentElement.scrollTop / documentElement.clientHeight) * 100
        );
      }

      if (
        documentElement.scrollTop >= bgChangeStart &&
        documentElement.scrollTop <= documentElement.clientHeight
      ) {
        setBgChangePercent(
          ((documentElement.scrollTop - bgChangeStart) / bgChangeEnd) * 100
        );
      }

      if (documentElement.scrollTop >= documentElement.clientHeight * 0.95) {
        setBgChange(true);
      } else {
        setBgChange(false);
      }
    }

    window.addEventListener('scroll', onScroll);
    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  console.log(bgChangePercent);

  return (
    <AboutContainer>
      <AboutContent scrollPercent={bgChangePercent}>
        <AboutTitle scrollPercent={scrollPercent - 30}>ABOUT</AboutTitle>
        <AboutText>
          Front-end web developer enthusiastic in building exceptional user
          experiences. UCLA alumni with a passion in design, technology,
          photography and music.
        </AboutText>
      </AboutContent>
      <BackgroundBlock bgChange={bgChange} />
    </AboutContainer>
  );
}

export default About;
