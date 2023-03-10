import styled from 'styled-components';
import device from '../../../helpers/organizers/breakpoints';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: clip;
  flex-direction: column;
`;

export const BackgroundSpacer = styled.div<{ slides: number }>`
  height: ${(p) => (p.slides - 0.5) * 100 + 'vh'};
  background-color: ${(p) => p.theme.colors.primary};
`;

export const ContentContainer = styled.div`
  position: fixed;
  height: 90vh;
  width: 100vw;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

export const TextContentContainer = styled.div`
  height: 60vh;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${(p) => p.theme.colors.background};
  z-index: 1;
`;

export const ProjectText = styled.div<{ fontSize?: number }>`
  font: ${(p) => p.fontSize + 'px Cabin'};
  transition: all 0.5s ease-out;

  span {
    overflow: hidden;
    background-color: ${(p) => p.theme.colors.darker};
    animation: backgroundFade 0.3s ease-out, textFade 0.3s linear;

    @keyframes backgroundFade {
      from {
        background-color: transparent;
      }
      50% {
        background-color: transparent;
      }
      to {
        background-color: black;
      }
    }

    @keyframes textFade {
      from {
        color: transparent;
      }
      90% {
        color: transparent;
      }
      to {
        color: inherit;
      }
    }
  }
`;

export const ProjectTitle = styled.span`
  font: 50px Cabin;

  @media (${device.smallest}) {
    font-size: 30px;
  }
  @media (${device.mobileS}) {
    font-size: 32px;
  }
  @media (${device.mobileM}) {
    font-size: 35px;
  }
  @media (${device.mobileL}) {
    font-size: 40px;
  }
`;

export const ProjectDesc = styled.span`
  font: 30px Cabin;
  @media (${device.smallest}) {
    font-size: 18px;
  }
  @media (${device.mobileS}) {
    font-size: 20px;
  }
  @media (${device.mobileM}) {
    font-size: 23px;
  }
  @media (${device.mobileL}) {
    font-size: 25px;
  }
`;

export const ProjectRoles = styled.span`
  font: 25px Cabin;
  @media (${device.smallest}) {
    font-size: 14px;
  }
  @media (${device.mobileS}) {
    font-size: 16px;
  }
  @media (${device.mobileM}) {
    font-size: 19px;
  }
  @media (${device.mobileL}) {
    font-size: 22px;
  }
`;

export const ImageContentContainer = styled.div<{ show: boolean }>`
  position: relative;
  opacity: 100%;
  display: flex;
  height: 40vh;
  justify-content: center;
  align-items: end;
  opacity: ${(p) => (p.show ? '80%' : '100%')};
  transition: opacity 0.3s ease-out;
`;

export const DesktopImage = styled.img`
  position: absolute;
  width: 1024px;
  animation: fade 0.3s ease-out;

  @keyframes fade {
    from {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (${device.smallest}) {
    width: 300px;
  }
  @media (${device.mobileS}) {
    width: 325px;
  }
  @media (${device.mobileM}) {
    width: 350px;
  }
  @media (${device.mobileL}) {
    width: 400px;
  }
`;

export const MobileImage = styled.img`
  position: absolute;
  width: 34px;
  transition: all 0.7s ease-out;
  margin-left: 25%;

  animation: fade 0.3s ease-out;

  @keyframes fade {
    from {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (${device.smallest}) {
    width: 70px;
  }
  @media (${device.mobileS}) {
    width: 75px;
  }
  @media (${device.mobileM}) {
    width: 80px;
  }
  @media (${device.mobileL}) {
    width: 100px;
  }
`;

export const ImageNavWindow = styled.div<{ show: boolean }>`
  position: absolute;
  width: 100%;
  height: 80%;
  display: flex;
  visibility: ${(p) => (p.show ? 'visible' : 'hidden')};
  opacity: ${(p) => (p.show ? '100%' : '0')};
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-out;
  z-index: 10;
`;

export const VisitButton = styled.div`
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.background};
  border-radius: 10px;
  padding: 10px 15px;
  transition: transform 0.3s ease;
  margin: 2px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const BackgroundBlock = styled.div<{
  bgChange: { in: boolean; out: boolean };
}>`
  position: fixed;
  transform: ${(p) =>
    p.bgChange.in && !p.bgChange.out
      ? 'translateY(-50)'
      : p.bgChange.in && p.bgChange.out
      ? 'translateY(-150vh)'
      : 'translateY(150vh)'};
  bottom: 0;
  background-color: ${(p) => p.theme.colors.primary};
  width: 100vw;
  height: 150vh;
  transition: transform 0.3s ease-out;
`;
