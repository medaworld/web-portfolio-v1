import { useEffect, useState } from 'react';
import {
  AboutText,
  AboutTitle,
  AboutContainer,
  AboutContent,
} from '../../../styles/components/Desktop/Hero';

function About() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [contentFollowPercent, setContentFollowPercent] = useState(0);

  useEffect(function mount() {
    function onScroll(event: any) {
      const { documentElement } = event.srcElement;

      // Sets title translate. When scrollTop = clientHeight, it is a window down (slide 2) aka scrollPercent = 100
      if (documentElement.scrollTop <= documentElement.clientHeight) {
        setScrollPercent(
          (documentElement.scrollTop / documentElement.clientHeight) * 100
        );
      }

      // Sets content follow. contentFollow begins halfway down the first window and ends when second window reaches bottom.
      if (
        documentElement.scrollTop >= documentElement.clientHeight / 2 &&
        documentElement.scrollTop <= documentElement.clientHeight
      ) {
        setContentFollowPercent(
          ((documentElement.scrollTop - documentElement.clientHeight / 2) / // Represents when percentage begings
            (documentElement.clientHeight / 2)) * // Ends half a window down
            100
        );
      }
    }

    window.addEventListener('scroll', onScroll);
    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <AboutContainer>
      <AboutContent
        style={{
          transform: 'translateY(' + contentFollowPercent * 0.2 + 'vh)',
        }}
      >
        <AboutTitle
          style={{
            transform: 'translateX(' + (scrollPercent * 3 - 50) + '%)',
          }}
        >
          ABOUT
        </AboutTitle>
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
