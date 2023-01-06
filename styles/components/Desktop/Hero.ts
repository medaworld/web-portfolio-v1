import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
  @keyframes rollIn {
    0% {
      transform: translate(-900px, 0) rotate(0deg);
    }
    100% {
      transform: translate(0, 0) rotate(359deg);
    }
  }
`;

export const FullName = styled.h1`
  animation: slideBack 2s normal;
  @keyframes slideBack {
    0% {
      transform: translate(900px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

export const TitleText = styled.h2`
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
`;

export const Block = styled.div`
  position: absolute;
  background-color: ${(p) => p.theme.colors.background};
  width: 300px;
  height: 300px;
  overflow: auto;
  z-index: 10;
  transform: translateY(75px);
  animation: hideBlock 2s linear forwards;
  animation-delay: 2s;

  @keyframes hideBlock {
    0% {
      opacity: 1;
      height: 300px;
    }
    100% {
      opacity: 0;
      height: 0;
    }
  }
`;

export const AboutContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 30vh;
`;
export const AboutTitle = styled.div<{ scrollPercent: number }>`
  position: absolute;
  font-family: Raleway;
  transition: transform 0.5s ease-out;
  margin: 0 0 0 5%;
  font-size: 100px;
  opacity: 20%;
  transform: ${(p) => 'translateX(' + p.scrollPercent * 0.4 + '%)'};
`;

export const AboutText = styled.div`
  align-items: center;
  text-align: left;
  margin: 10% 20% 0 10%;
  font-size: 30px;
`;
