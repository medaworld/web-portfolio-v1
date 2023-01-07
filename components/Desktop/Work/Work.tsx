import { useEffect, useState } from 'react';
import { workData } from '../../../helpers/organizers/workData';
import { Container } from '../../../styles/components/Desktop/Work';
import WorkSummary from './WorkSummary';

function Work() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);
  const [slideTop, setSlideTop] = useState(0);
  const [changeBackground, setChangeBackground] = useState(false);

  useEffect(function mount() {
    function onScroll(event: any) {
      const { documentElement } = event.srcElement;
      const workSectionStart = documentElement.clientHeight * 1;

      for (let i = 0; i <= workData.length; i++) {
        const workSlideTop =
          workSectionStart + documentElement.clientHeight * (i - 1);
        const workSlideBottom =
          workSectionStart + documentElement.clientHeight * i;
        if (
          documentElement.scrollTop >= workSlideTop &&
          documentElement.scrollTop <= workSlideBottom
        ) {
          setSlideNumber(i);
          setSlideTop(workSlideTop);
        }
      }

      if (slideNumber == 0) {
        setScrollPercent(0);
      } else {
        setScrollPercent(
          ((documentElement.scrollTop - slideTop) /
            documentElement.clientHeight) *
            100
        );
      }

      if (slideNumber > 0) {
        setChangeBackground(true);
      } else {
        setChangeBackground(false);
      }

      //   console.log(scrollPercent);
    }
    window.addEventListener('scroll', onScroll);
    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  const workContent = workData.map((work, key) => {
    return (
      <WorkSummary key={key} workData={work} scrollPercent={scrollPercent} />
    );
  });

  return <Container>{workContent}</Container>;
}

export default Work;
