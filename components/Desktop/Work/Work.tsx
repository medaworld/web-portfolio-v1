import { useEffect, useState } from 'react';
import { workData } from '../../../helpers/organizers/workData';
import {
  Container,
  WorkTitle,
  BackgroundBlock,
} from '../../../styles/components/Desktop/Work';
import ImageContent from './ImageContent';
import TextContent from './TextContent';

function DesktopWork() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [totalScroll, setTotalScroll] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);
  const [slideTop, setSlideTop] = useState(0);
  const [showTitle, setShowTitle] = useState({ in: false, out: false });
  const [showText, setShowText] = useState(false);
  const [bgChange, setBgChange] = useState(false);
  const [clientHeight, setClientHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const [project, setProject] = useState({
    name: '',
    description: '',
    roles: [''],
    images: { desktop: '', mobile: '' },
  });

  useEffect(function mount() {
    function onScroll(event: any) {
      const { documentElement } = event.srcElement;

      const sectionStart = documentElement.clientHeight;
      const sectionHeight =
        sectionStart + documentElement.clientHeight * workData.length;
      const beforeSectionArea = scrollTop < sectionStart;
      const inSectionArea = scrollTop > sectionStart;

      setClientHeight(documentElement.clientHeight);
      setScrollTop(documentElement.scrollTop);

      // Background pull up before section
      if (scrollTop >= clientHeight * 0.99) {
        setBgChange(true);
      } else {
        setBgChange(false);
      }

      // Setting slide number and top of new slide
      for (let i = 0; i <= workData.length; i++) {
        if (
          scrollTop >= sectionStart + documentElement.clientHeight * (i - 1) &&
          scrollTop <= sectionStart + documentElement.clientHeight * i
        ) {
          setSlideNumber(i);
          setSlideTop(sectionStart + documentElement.clientHeight * (i - 1));
        }
      }

      // Setting scroll percent
      if (beforeSectionArea) {
        setScrollPercent(0);
        setTotalScroll(0);
      } else {
        setScrollPercent(
          ((scrollTop - slideTop) / documentElement.clientHeight) * 100
        );
        setTotalScroll(
          ((scrollTop - sectionStart) * 100) / (sectionHeight - sectionStart)
        );
      }

      // Setting text to show
      if (inSectionArea && scrollPercent < 99) {
        setShowText(true);
      } else {
        setShowText(false);
      }

      // Setting project to display
      if (slideNumber > 0 && documentElement.scrollTop) {
        setProject(workData[slideNumber - 1]);
      } else {
        setProject({
          name: '',
          description: '',
          roles: [],
          images: { desktop: '', mobile: '' },
        });
      }

      // Setting WORK title
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

  const imageContent = workData.map((work, index) => {
    return (
      <ImageContent
        key={index}
        data={work}
        index={index}
        clientHeight={clientHeight}
        scrollTop={scrollTop}
      />
    );
  });

  return (
    <Container>
      <BackgroundBlock bgChange={bgChange} />
      <WorkTitle showTitle={showTitle}>WORK</WorkTitle>
      {showText && <TextContent project={project} />}
      {imageContent}
    </Container>
  );
}

export default DesktopWork;
