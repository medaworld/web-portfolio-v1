import { useEffect, useState } from 'react';
import {
  Container,
  Skill,
  SkillsLeft,
  SkillsRight,
  SkillsTitle,
} from '../../../styles/components/Desktop/Skills';

function Skills() {
  const [showTitle, setShowTitle] = useState(false);
  const skills = [
    'JavaScript',
    'CSS',
    'HTML',
    'TypeScript',
    'React',
    'Redux',
    'Next.js',
    'Node.js',
    'Express',
    'MongoDB',
    'Git & Github',
    'Styled-Component',
    'SQL',
  ];
  const skillsFirst = skills.slice(0, skills.length / 2);
  const skillsLast = skills.slice(skills.length / 2, skills.length);

  useEffect(function mount() {
    function onScroll(event: any) {
      const { documentElement } = event.srcElement;
      const bgChangeStart = documentElement.clientHeight * 4;
      const bgChangeEnd = documentElement.clientHeight - bgChangeStart;
      console.log(documentElement.scrollTop, bgChangeStart);

      if (documentElement.scrollTop >= documentElement.clientHeight * 4) {
        setShowTitle(true);
      } else {
        setShowTitle(false);
      }
      console.log(showTitle);
    }

    window.addEventListener('scroll', onScroll);
    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <Container>
      <SkillsTitle showTitle={showTitle}>SKILLS</SkillsTitle>
      <SkillsLeft>
        {skillsFirst.map((skill, key) => {
          return <Skill key={key}>{skill}</Skill>;
        })}
      </SkillsLeft>
      <SkillsRight>
        {skillsLast.map((skill, key) => {
          return <Skill key={key}>{skill}</Skill>;
        })}
      </SkillsRight>
    </Container>
  );
}

export default Skills;
