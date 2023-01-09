import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-flow: row nowrap;
  overflow-x: clip;
  height: 50vh;
`;

export const ContactTitle = styled.div<{ showTitle: boolean }>`
  position: absolute;
  font: 120px Cabin;
  line-height: 120px;
  color: ${(p) => p.theme.colors.primary};
  opacity: 20%;
  z-index: -1;
  transition: transform 0.5s ease-out;
`;

export const ContactIcons = styled.div`
  margin-top: 20%;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  height: 110px;
  width: 110px;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

export const Logo = styled.div<{ hoverColor: string; url: string }>`
  transition: all 0.3s ease;
  mask-image: url(${(p) => p.url});
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: center;
  background-color: ${(p) => p.theme.colors.primary};
  width: 100%;
  height: 100%;

  &:hover {
    opacity: 50%;
    cursor: pointer;
    background-color: ${(p) => p.hoverColor};
  }
`;
