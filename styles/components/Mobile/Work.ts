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
  /* bottom: ${(p) => (p.bgChange ? '0' : '-100vh')}; */
  background-color: ${(p) => p.theme.colors.primary};
  width: 100vw;
  height: 100vh;
  transition: all 0.5s ease-out;
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

export const Slide = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const ImageContentContainer = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  position: relative;
`;

export const ImageContainer = styled.div<{ slidePercent: number }>`
  width: 100%;
  height: 818px;
  transition: all 0.5s ease-out;
  position: relative;
  transform: ${(p) =>
    p.slidePercent > 5 ? 'translateY(-50%)' : 'translateY(0)'};
  filter: brightness(110%);
  @media (${device.desktop}) {
    height: 870px;
  }
`;

export const DesktopImage = styled.img`
  position: absolute;
  width: 1024px;
  object-fit: contain;
  margin-bottom: -10%;
  margin-left: -20%;
  transition: all 0.5s ease-out;

  @media (${device.smallest}) {
    width: 320px;
  }
  @media (${device.mobileS}) {
    width: 375px;
  }
  @media (${device.mobileM}) {
    width: 700px;
  }
  @media (${device.mobileL}) {
    width: 900px;
  }
`;

export const MobileImage = styled.img`
  position: absolute;
  width: 384px;
  margin-left: 100%;
  margin-top: 40vh;
  transition: all 0.7s ease-out;

  @media (${device.smallest}) {
    width: 200px;
  }
  @media (${device.mobileS}) {
    width: 205px;
  }
  @media (${device.mobileM}) {
    width: 250px;
  }
  @media (${device.mobileL}) {
    width: 280px;
  }
`;

export const ImageNavWindow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
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
