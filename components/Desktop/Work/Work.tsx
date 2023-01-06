import { useEffect, useState } from 'react';
import { workData } from '../../../helpers/organizers/workData';
import { Container } from '../../../styles/components/Desktop/Work';
import WorkSummary from './WorkSummary';

function Work() {
  const [scrollSlide, setScrollSlide] = useState({ slide: 0 });
  let lastScrollTop = 0;
  let scrollDirectionDown = true;
  let vh = 0;

  useEffect(function mount() {
    function onScroll(event: any) {
      const { body, documentElement } = event.srcElement;
      const { slide } = scrollSlide;
      const scrollDistance = Math.max(
        body.scrollTop,
        documentElement.scrollTop
      );

      if (scrollDistance > lastScrollTop) {
        scrollDirectionDown = true;
      } else {
        scrollDirectionDown = false;
      }
      lastScrollTop = scrollDistance;

      if (
        Math.floor(scrollDistance / vh) !== slide &&
        slide < workData.length - 1
      ) {
        setScrollSlide({ slide: Math.floor(scrollDistance / vh) });
      } else if (
        slide === workData.length - 1 &&
        Math.floor(scrollDistance / vh) < slide
      ) {
        setScrollSlide({ slide: Math.floor(scrollDistance / vh) });
      }
    }
    window.addEventListener('scroll', onScroll);
    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  const workContent = workData.map((work, key) => {
    return <WorkSummary key={key} workData={work} />;
  });

  return <Container>{workContent}</Container>;
}

export default Work;
