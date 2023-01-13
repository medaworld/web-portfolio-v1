import styled from 'styled-components';
import device from '../../../helpers/organizers/breakpoints';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 55px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: Raleway;
    font-size: 35px;
  }
`;

export const Logo = styled.img`
  animation: rollIn 2s normal;
  width: 120px;
  @keyframes rollIn {
    0% {
      transform: translate(-900px, 0) rotate(0deg);
    }
    100% {
      transform: translate(0, 0) rotate(359deg);
    }
  }

  @media (${device.laptopL}) {
    width: 144px;
  }

  @media (${device.desktop}) {
    width: 192px;
  }
`;

export const FullName = styled.div`
  display: block;
  font-size: 55px;
  margin: 0.67em 0;
  animation: slideBack 2s normal;
  @keyframes slideBack {
    0% {
      transform: translate(900px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @media (${device.laptopL}) {
    font-size: 66px;
  }
  @media (${device.desktop}) {
    font-size: 88px;
  }
`;

export const TitleText = styled.div`
  display: block;
  font-size: 35px;
  margin: 0.83em 0;
  animation: moveUp 2s normal;
  @keyframes moveUp {
    0% {
      transform: translateY(900px);
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
  }

  @media (${device.laptopL}) {
    //1.2
    font-size: 42px;
  }
  @media (${device.desktop}) {
    //1.6
    font-size: 56px;
  }
`;

export const Block = styled.div`
  position: absolute;
  background-color: ${(p) => p.theme.colors.background};
  width: 100vw;
  overflow: auto;
  z-index: 10;
  bottom: 0;
  animation: hideBlock 2s linear forwards;

  @keyframes hideBlock {
    0% {
      opacity: 1;
      height: 45vh;
    }
    100% {
      height: 35vh;
    }
  }
`;

export const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const AboutContent = styled.div`
  padding: 5% 0;
  transition: transform 0.5s ease-out;
`;

export const AboutTitle = styled.div`
  position: absolute;
  font: 120px Cabin;
  line-height: 120px;
  color: ${(p) => p.theme.colors.color};
  opacity: 40%;
  z-index: -1;
  transition: transform 0.5s ease-out;

  @media (${device.laptopL}) {
    //1.2
    font-size: 144px;
  }
  @media (${device.desktop}) {
    //1.6
    font-size: 192px;
  }
`;

export const AboutText = styled.div`
  align-items: center;
  text-align: left;
  margin: 10% 20% 0 10%;
  font-size: 30px;

  @media (${device.laptopL}) {
    //1.2
    font-size: 36px;
  }
  @media (${device.desktop}) {
    //1.6
    font-size: 48px;
  }
`;
