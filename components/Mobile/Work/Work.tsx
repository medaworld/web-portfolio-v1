import { useEffect, useState } from 'react';
import { WorkData } from '../../../helpers/organizers/types';
import { workData } from '../../../helpers/organizers/workData';
import {
  Container,
  WorkTitle,
  BackgroundBlock,
  BackgroundSpacer,
} from '../../../styles/components/Mobile/Work';
import Content from './Content';

function MobileWork() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [totalScroll, setTotalScroll] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);
  const [slideTop, setSlideTop] = useState(0);
  const [showTitle, setShowTitle] = useState({ in: false, out: false });
  const [showContent, setShowContent] = useState(false);
  const [bgChange, setBgChange] = useState({ in: false, out: false });
  const [clientHeight, setClientHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const [project, setProject] = useState<WorkData>({
    order: 0,
    name: '',
    description: '',
    roles: [''],
    images: { desktop: '', mobile: '' },
    links: { site: null, github: null },
  });

  useEffect(function mount() {
    function onScroll(event: any) {
      const { documentElement } = event.srcElement;

      const sectionStart = documentElement.clientHeight * 1.5;
      const sectionHeight =
        sectionStart + documentElement.clientHeight * workData.length;
      const beforeSectionArea = scrollTop < sectionStart;

      setClientHeight(documentElement.clientHeight);
      setScrollTop(documentElement.scrollTop);

      // Background pull up before section
      if (scrollTop >= sectionStart && scrollTop <= clientHeight * 3.5) {
        setBgChange({ in: true, out: false });
      } else if (scrollTop >= sectionStart && scrollTop >= clientHeight * 3.5) {
        setBgChange({ in: true, out: true });
      } else {
        setBgChange({ in: false, out: false });
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
      if (scrollTop >= sectionStart && scrollPercent < 99) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }

      // Setting project to display
      if (slideNumber > 0 && documentElement.scrollTop) {
        setProject(workData[slideNumber - 1]);
      } else {
        setProject({
          order: 0,
          name: '',
          description: '',
          roles: [''],
          images: { desktop: '', mobile: '' },
          links: { site: '', github: '' },
        });
      }

      // Setting WORK title
      if (scrollTop >= sectionStart && scrollTop <= clientHeight * 2) {
        setShowTitle({ in: true, out: false });
      } else if (scrollTop > sectionStart && scrollTop > clientHeight * 2) {
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

  return (
    <Container>
      <BackgroundBlock bgChange={bgChange} />
      <WorkTitle showTitle={showTitle}>WORK</WorkTitle>
      {showContent && <Content project={project} />}
      <BackgroundSpacer slides={workData.length} />
    </Container>
  );
}

export default MobileWork;
