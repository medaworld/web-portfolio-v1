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
  transition: height 0.3s ease-out;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
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
  width: 120px;
  animation: rollIn 2s normal;

  @keyframes rollIn {
    0% {
      transform: translate(-900px, 0) rotate(0deg);
    }
    100% {
      transform: translate(0, 0) rotate(359deg);
    }
  }

  @media screen and (${device.smallest}) {
    width: 50px;
  }
  @media screen and (${device.mobileS}) {
    width: 60px;
  }
  @media screen and (${device.mobileM}) {
    width: 70px;
  }
  @media screen and (${device.mobileL}) {
    width: 80px;
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

  @media (${device.smallest}) {
    font-size: 28px;
  }
  @media (${device.mobileS}) {
    font-size: 33px;
  }
  @media (${device.mobileM}) {
    font-size: 38px;
  }
  @media (${device.mobileL}) {
    font-size: 44px;
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

  @media (${device.smallest}) {
    font-size: 18px;
  }
  @media (${device.mobileS}) {
    font-size: 23px;
  }
  @media (${device.mobileM}) {
    font-size: 28px;
  }
  @media (${device.mobileL}) {
    font-size: 32px;
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
      height: 45%;
    }
    100% {
      height: 20%;
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

export const AboutText = styled.div`
  align-items: center;
  text-align: left;
  margin: 10% 20% 0 10%;

  @media (${device.smallest}) {
    font-size: 22px;
  }
  @media (${device.mobileS}) {
    font-size: 24px;
  }
  @media (${device.mobileM}) {
    font-size: 26px;
  }
  @media (${device.mobileL}) {
    font-size: 28px;
  }
`;
