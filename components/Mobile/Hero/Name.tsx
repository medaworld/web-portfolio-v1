import {
  NameContainer,
  Logo,
  FullName,
} from '../../../styles/components/Mobile/Hero';
import MyLogo from '/public/favicon.png';

function Name() {
  return (
    <NameContainer>
      <Logo src={MyLogo.src} />
      <FullName>Brian Suruki</FullName>
    </NameContainer>
  );
}

export default Name;
