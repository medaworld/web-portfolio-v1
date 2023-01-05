import styled from 'styled-components';
import { NameContainer } from '../../../styles/components/Desktop/Hero';
import MyLogo from '/public/favicon.png';

const Logo = styled.img`
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

const FullName = styled.h1`
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

function Name() {
  return (
    <NameContainer>
      <Logo src={MyLogo.src} width={120} />
      <FullName>Brian Suruki</FullName>
    </NameContainer>
  );
}

export default Name;
