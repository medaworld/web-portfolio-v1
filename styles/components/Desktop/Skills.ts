import styled from 'styled-components';
import device from '../../../helpers/organizers/breakpoints';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
`;

export const SkillsTitle = styled.div<{ showTitle: boolean }>`
  font: 120px Cabin;
  line-height: 120px;
  margin-top: 15px;
  color: ${(p) => p.theme.colors.error};
  opacity: 60%;
  z-index: -1;
  transform: ${(p) => (p.showTitle ? '' : 'translateY(-110px)')};
  transition: transform 0.5s ease-out;
  transition-delay: 0.1s;

  @media (${device.laptopL}) {
    font-size: 144px;
  }
  @media (${device.desktop}) {
    font-size: 192px;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;

  ul:before {
    content: attr(aria-label);
    font-size: 120%;
    font-weight: bold;
    font-family: Cabin;
  }
`;

export const Languages = styled.ul<{ showLanguages: boolean }>`
  position: absolute;
  top: 15vh;
  left: 10vw;
  font-size: 30px;
  padding: 0 5%;
  list-style: none;
  word-wrap: break-word;
  transition: transform 0.5s ease-out;
  transform: ${(p) => (p.showLanguages ? '' : 'translateX(-50vw)')};

  @media (${device.laptopL}) {
    font-size: 36px;
  }
  @media (${device.desktop}) {
    font-size: 48px;
  }
`;

export const Frameworks = styled.ul<{ showFrameworks: boolean }>`
  position: absolute;
  top: 32.5vh;
  right: 10vw;
  font-size: 30px;
  text-align: right;
  padding: 0 5%;
  list-style: none;
  word-wrap: break-word;
  transition: transform 0.5s ease-out;
  transform: ${(p) => (p.showFrameworks ? '' : 'translateX(50vw)')};

  @media (${device.laptopL}) {
    font-size: 36px;
  }
  @media (${device.desktop}) {
    font-size: 48px;
  }
`;

export const Tools = styled.ul<{ showTools: boolean }>`
  position: absolute;
  top: 50vh;
  left: 10vw;
  font-size: 30px;
  padding: 0 5%;
  list-style: none;
  word-wrap: break-word;
  transition: transform 0.5s ease-out;
  transform: ${(p) => (p.showTools ? '' : 'translateX(-50vw)')};

  @media (${device.laptopL}) {
    font-size: 36px;
  }
  @media (${device.desktop}) {
    font-size: 48px;
  }
`;

export const Design = styled.ul<{ showDesign: boolean }>`
  position: absolute;
  top: 67.5vh;
  right: 10vw;
  font-size: 30px;
  text-align: right;
  padding: 0 5%;
  list-style: none;
  word-wrap: break-word;
  transition: transform 0.5s ease-out;
  transform: ${(p) => (p.showDesign ? '' : 'translateX(50vw)')};

  @media (${device.laptopL}) {
    font-size: 36px;
  }
  @media (${device.desktop}) {
    font-size: 48px;
  }
`;

export const Skill = styled.li`
  font-size: 25px;

  @media (${device.laptopL}) {
    font-size: 30px;
  }
  @media (${device.desktop}) {
    font-size: 40px;
  }
`;
