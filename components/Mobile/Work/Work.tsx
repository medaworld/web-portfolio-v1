import { useEffect, useState } from 'react';
import { WorkData } from '../../../helpers/organizers/types';
import { workData } from '../../../helpers/organizers/workData';
import {
  Container,
  BackgroundBlock,
  BackgroundSpacer,
} from '../../../styles/components/Mobile/Work';
import Content from './Content';

function MobileWork() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);
  const [slideTop, setSlideTop] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [bgChange, setBgChange] = useState({ in: false, out: false });

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

      // Background pull up before section
      if (
        documentElement.scrollTop >= sectionStart &&
        documentElement.scrollTop <= documentElement.clientHeight * 3.5
      ) {
        setBgChange({ in: true, out: false });
      } else if (
        documentElement.scrollTop >= sectionStart &&
        documentElement.scrollTop >= documentElement.clientHeight * 3.5
      ) {
        setBgChange({ in: true, out: true });
      } else {
        setBgChange({ in: false, out: false });
      }

      // Setting slide number and top of new slide
      for (let i = 0; i <= workData.length; i++) {
        if (
          documentElement.scrollTop >=
            sectionStart + documentElement.clientHeight * (i - 1) &&
          documentElement.scrollTop <=
            sectionStart + documentElement.clientHeight * i
        ) {
          setSlideNumber(i);
          setSlideTop(sectionStart + documentElement.clientHeight * (i - 1));
        }
      }

      // Setting scroll percent
      if (documentElement.scrollTop < sectionStart) {
        setScrollPercent(0);
      } else {
        setScrollPercent(
          ((documentElement.scrollTop - slideTop) /
            documentElement.clientHeight) *
            100
        );
      }

      // Setting text to show
      if (documentElement.scrollTop >= sectionStart && scrollPercent < 99) {
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
    }

    window.addEventListener('scroll', onScroll);
    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <Container>
      <BackgroundBlock bgChange={bgChange} />
      {showContent && <Content project={project} />}
      <BackgroundSpacer slides={workData.length} />
    </Container>
  );
}

export default MobileWork;
