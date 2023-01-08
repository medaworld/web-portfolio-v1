import { useEffect, useState } from 'react';
import { workData } from '../../../helpers/organizers/workData';
import { Container, WorkTitle } from '../../../styles/components/Desktop/Work';
import ImageContent from './ImageContent';
import TextContent from './TextContent';

function Work() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [totalScroll, setTotalScroll] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);
  const [slideTop, setSlideTop] = useState(0);
  const [showTitle, setShowTitle] = useState({ in: false, out: false });
  const [showText, setShowText] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [project, setProject] = useState({
    name: '',
    description: '',
    roles: [''],
    images: { desktop: '', mobile: '' },
  });

  useEffect(function mount() {
    function onScroll(event: any) {
      const { documentElement } = event.srcElement;
      const workSectionStart = documentElement.clientHeight * 1;
      const workSectionHeight =
        workSectionStart + documentElement.clientHeight * workData.length;

      setTotalScroll(
        ((documentElement.scrollTop - workSectionStart) * 100) /
          (workSectionHeight - workSectionStart)
      );

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

      if (slideNumber < 1) {
        setScrollPercent(0);
        setTotalScroll(0);
      }

      if (slideNumber > 0 && scrollPercent < 99) {
        setShowText(true);
        setShowImage(true);
      } else {
        setShowText(false);
        setShowImage(false);
      }

      if (slideNumber > 0) {
        setProject(workData[slideNumber - 1]);
      } else {
        setProject({
          name: '',
          description: '',
          roles: [],
          images: { desktop: '', mobile: '' },
        });
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

      if (totalScroll > 0 && totalScroll < 20 / workData.length) {
        setShowTitle({ in: true, out: false });
      } else if (totalScroll > 0 && totalScroll > 20 / workData.length) {
        setShowTitle({ in: true, out: true });
      } else {
        setShowTitle({ in: false, out: false });
      }
    }
    window.addEventListener('scroll', onScroll);
    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  const imageContent = workData.map((work, key) => {
    return <ImageContent key={key} data={work} scrollPercent={totalScroll} />;
  });

  return (
    <Container>
      <WorkTitle showTitle={showTitle}>WORK</WorkTitle>
      {showText && <TextContent project={project} />}
      {imageContent}
    </Container>
  );
}

export default Work;
