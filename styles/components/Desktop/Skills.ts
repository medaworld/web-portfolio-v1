import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
`;

export const SkillsTitle = styled.div<{ showTitle: boolean }>`
  position: absolute;
  font: 120px Catamaran;
  line-height: 120px;
  margin-top: 15px;
  color: ${(p) => p.theme.colors.error};
  opacity: 60%;
  z-index: -1;
  transform: ${(p) => (p.showTitle ? '' : 'translateY(-110px)')};
  transition: transform 0.5s ease-out;
  transition-delay: 0.1s;
`;

export const SkillsLeft = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 5%;
  padding-top: 120px;
  justify-content: space-evenly;
  font-size: 30px;
`;

export const SkillsRight = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 5%;
  padding-top: 120px;
  justify-content: space-evenly;
  align-items: end;
  font-size: 30px;
`;

export const Skill = styled.div``;
