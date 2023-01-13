import { useEffect, useState } from 'react';
import {
  Container,
  Design,
  Frameworks,
  Languages,
  Skill,
  SkillsContainer,
  SkillsTitle,
  Tools,
} from '../../../styles/components/Desktop/Skills';

function DesktopSkills() {
  const [showTitle, setShowTitle] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showFrameworks, setShowFrameworks] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showDesign, setShowDesign] = useState(false);

  const languages = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'];
  const frameworks = ['React & Redux', 'Next.js', 'Node.js', 'Express'];
  const tools = ['MongoDB', 'Git & Github', 'Postman', 'Firebase'];
  const design = ['Affinity Designer', 'Affinity Publisher', 'Affinity Photo'];

  useEffect(function mount() {
    function onScroll(event: any) {
      const { documentElement } = event.srcElement;

      const scroll =
        ((documentElement.scrollTop - documentElement.clientHeight * 3) /
          documentElement.clientHeight) *
        100;

      if (scroll > 10) {
        setShowTitle(true);
      } else {
        setShowTitle(false);
      }

      if (scroll > 25) {
        setShowLanguages(true);
      } else {
        setShowLanguages(false);
      }

      if (scroll > 40) {
        setShowFrameworks(true);
      } else {
        setShowFrameworks(false);
      }

      if (scroll > 60) {
        setShowTools(true);
      } else {
        setShowTools(false);
      }

      if (scroll > 77) {
        setShowDesign(true);
      } else {
        setShowDesign(false);
      }
    }

    window.addEventListener('scroll', onScroll);
    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <Container>
      <SkillsTitle showTitle={showTitle}>SKILLS</SkillsTitle>
      <SkillsContainer>
        <Languages aria-label="LANGUAGES" showLanguages={showLanguages}>
          {languages.map((skill, key) => {
            return <Skill key={key}>{skill}</Skill>;
          })}
        </Languages>
        <Frameworks aria-label="FRAMEWORKS" showFrameworks={showFrameworks}>
          {frameworks.map((skill, key) => {
            return <Skill key={key}>{skill}</Skill>;
          })}
        </Frameworks>
        <Tools aria-label="TOOLS" showTools={showTools}>
          {tools.map((skill, key) => {
            return <Skill key={key}>{skill}</Skill>;
          })}
        </Tools>
        <Design aria-label="DESIGN" showDesign={showDesign}>
          {design.map((skill, key) => {
            return <Skill key={key}>{skill}</Skill>;
          })}
        </Design>
      </SkillsContainer>
    </Container>
  );
}

export default DesktopSkills;
