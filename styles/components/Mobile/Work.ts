import styled from 'styled-components';
import device from '../../../helpers/organizers/breakpoints';
import { WorkTitleProps } from '../../../helpers/organizers/types';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: clip;
  flex-direction: column;
`;

export const WorkTitle = styled.div<WorkTitleProps>`
  position: fixed;
  font: 120px Cabin;
  line-height: 120px;
  color: ${(p) => p.theme.colors.success};
  top: ${(p) =>
    p.showTitle.in && !p.showTitle.out
      ? '0%'
      : p.showTitle.in && p.showTitle.out
      ? '-40%'
      : '110%'};
  opacity: 40%;
  right: 5%;
  transition: all 0.5s ease-out;

  @media (${device.smallest}) {
    font-size: 86px;
  }
  @media (${device.mobileS}) {
    font-size: 90px;
  }
  @media (${device.mobileM}) {
    font-size: 96px;
  }
  @media (${device.mobileL}) {
    font-size: 100px;
  }
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
  transition: all 0.4s ease-out;

  span {
    overflow: hidden;
    background-color: ${(p) => p.theme.colors.darker};
    animation: backgroundFade 0.5s ease-out, textFade 0.5s linear;

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

export const ImageContentContainer = styled.div`
  position: relative;
  display: flex;
  height: 40vh;
  justify-content: center;
  align-items: end;
`;

export const DesktopImage = styled.img`
  position: absolute;
  width: 1024px;

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
  transition: all 0.3s ease-out;
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
  bottom: ${(p) =>
    p.bgChange.in && !p.bgChange.out
      ? '0%'
      : p.bgChange.in && p.bgChange.out
      ? '100vh'
      : '-100vh'};
  background-color: ${(p) => p.theme.colors.primary};
  width: 100vw;
  height: 100vh;
  transition: bottom 0.5s ease-out;
`;
