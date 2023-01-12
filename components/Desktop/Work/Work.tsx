import test from 'node:test';
import { useEffect, useState } from 'react';
import { workData } from '../../../helpers/organizers/workData';
import {
  Container,
  WorkTitle,
  BackgroundBlock,
} from '../../../styles/components/Desktop/Work';
import ImageContent from './ImageContent';
import TextContent from './TextContent';

function Work() {
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

  let test: { index: number; scroll: number };

  useEffect(function mount() {
    function onScroll(event: any) {
      const { documentElement } = event.srcElement;
      const workSectionStart = documentElement.clientHeight * 1;
      const workSectionHeight =
        workSectionStart + documentElement.clientHeight * workData.length;
      setClientHeight(documentElement.clientHeight);
      setScrollTop(documentElement.scrollTop);

      for (let i = 0; i <= workData.length; i++) {
        if (
          documentElement.scrollTop >=
            workSectionStart + documentElement.clientHeight * (i - 1) &&
          documentElement.scrollTop <=
            workSectionStart + documentElement.clientHeight * i
        ) {
          setSlideNumber(i);
          setSlideTop(
            workSectionStart + documentElement.clientHeight * (i - 1)
          );
        }
      }

      if (slideNumber < 1) {
        setScrollPercent(0);
        setTotalScroll(0);
      } else {
        setScrollPercent(
          ((documentElement.scrollTop - slideTop) /
            documentElement.clientHeight) *
            100
        );
        setTotalScroll(
          ((documentElement.scrollTop - workSectionStart) * 100) /
            (workSectionHeight - workSectionStart)
        );
      }

      if (slideNumber > 0 && scrollPercent < 99) {
        setShowText(true);
      } else {
        setShowText(false);
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

      if (documentElement.scrollTop >= documentElement.clientHeight * 0.99) {
        setBgChange(true);
      } else {
        setBgChange(false);
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
    return (
      <ImageContent
        key={key}
        data={work}
        index={key}
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

export default Work;
