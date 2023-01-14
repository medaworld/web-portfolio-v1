import styled from 'styled-components';
import device from '../../../helpers/organizers/breakpoints';
import { WorkTitleProps } from '../../../helpers/organizers/types';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: clip;
  flex-direction: column;
  background-color: ${(p) => p.theme.colors.primary};
`;

export const WorkTitle = styled.div<WorkTitleProps>`
  position: fixed;
  font: 120px Cabin;
  line-height: 120px;
  color: ${(p) => p.theme.colors.success};
  top: ${(p) =>
    p.showTitle.in && !p.showTitle.out
      ? '10%'
      : p.showTitle.in && p.showTitle.out
      ? '-40%'
      : '110%'};
  opacity: 40%;
  right: 5%;
  transition: all 0.5s ease-out;

  @media (${device.laptopL}) {
    font-size: 144px;
  }
  @media (${device.desktop}) {
    font-size: 192px;
  }
`;

export const BackgroundBlock = styled.div<{ bgChange: boolean }>`
  position: absolute;
  top: 0;
  background-color: ${(p) => p.theme.colors.primary};
  width: 100vw;
  height: 200vh;
  z-index: 0;
  transform: ${(p) => (p.bgChange ? 'translateY(-100vh)' : '')};
  transition: transform 0.5s ease-out;
`;

export const TextContentContainer = styled.div`
  position: fixed;
  width: 45vw;
  top: 0;
  left: 0;
  height: 100vh;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${(p) => p.theme.colors.background};
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

  @media (${device.laptopL}) {
    font-size: 60px;
  }
  @media (${device.desktop}) {
    font-size: 80px;
  }
`;

export const ProjectDesc = styled.span`
  font: 30px Cabin;
  @media (${device.laptopL}) {
    font-size: 36px;
  }
  @media (${device.desktop}) {
    font-size: 48px;
  }
`;

export const ProjectRoles = styled.span`
  font: 25px Cabin;
  @media (${device.laptopL}) {
    font-size: 30px;
  }
  @media (${device.desktop}) {
    font-size: 40px;
  }
`;

export const Slide = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const ImageContentContainer = styled.div`
  height: 100vh;
  width: 50%;
  margin-left: 50%;
  display: flex;
  position: relative;
`;

export const ImageContainer = styled.div<{ slidePercent: number }>`
  width: 100%;
  height: 618px;
  transition: all 0.5s ease-out;
  position: relative;
  transform: ${(p) =>
    p.slidePercent > 5 ? 'translateY(-40%)' : 'translateY(0)'};
  filter: brightness(110%);
  @media (${device.desktop}) {
    height: 870px;
  }

  :hover {
    opacity: 70%;
    div:first-child {
      opacity: 100%;
    }
  }

  @supports (overflow: clip) {
    :hover {
      img:nth-child(2) {
        margin-left: -10%;
      }
      img:last-child {
        margin-left: 70%;
      }
    }
  }
`;

export const DesktopImage = styled.img`
  position: absolute;
  margin-bottom: -10%;
  transition: all 0.5s ease-out;
  width: 100%;

  @supports (overflow: clip) {
    width: 1024px;
    @media (${device.laptopL}) {
      width: 1228px;
    }
    @media (${device.desktop}) {
      width: 1440px;
    }
  }
`;

export const MobileImage = styled.img`
  position: absolute;
  margin-left: 50%;
  margin-top: 40vh;
  transition: all 0.7s ease-out;
  width: 200px;

  @supports (overflow: clip) {
    width: 384px;
    @media (${device.laptopL}) {
      width: 460px;
    }
    @media (${device.desktop}) {
      width: 512px;
    }
  }
`;

export const ImageNavWindow = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;
  transition: all 0.7s ease-out;
  z-index: 1;
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
