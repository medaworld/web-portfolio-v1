import styled from 'styled-components';
import { WorkTitleProps } from '../../../helpers/organizers/types';

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  overflow-x: clip;
  flex-direction: column;
`;

export const WorkTitle = styled.div<WorkTitleProps>`
  position: fixed;
  font: 120px Catamaran;
  line-height: 120px;
  color: ${(p) => p.theme.colors.success};
  top: ${(p) =>
    p.showTitle.in && !p.showTitle.out
      ? '10%'
      : p.showTitle.in && p.showTitle.out
      ? '-10%'
      : '110%'};
  opacity: 40%;
  right: 5%;
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
`;

export const ProjectText = styled.div<{ fontSize: number }>`
  font: ${(p) => p.fontSize + 'px Inter'};
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

export const SlideBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(p) => p.theme.colors.primary};
`;

export const ImageContentContainer = styled.div`
  height: 100vh;
  width: 50%;
  margin-left: 50%;
  display: flex;
`;

export const ImageContainer = styled.div`
  height: 100vh;
  position: relative;
`;

export const MobileImage = styled.img`
  width: 400px;
  transition: transform 0.5s ease-out;
`;

export const DesktopImage = styled.img`
  width: 800px;
  transition: transform 0.5s ease-out;
`;
