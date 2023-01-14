import { useEffect, useState } from 'react';
import {
  ContactIcons,
  ContactTitle,
  Container,
} from '../../../styles/components/Mobile/Contact';
import ContactIcon from './ContactIcon';
import githubIcon from '/public/icons/GithubIcon.png';
import emailIcon from '/public/icons/MailIcon.png';
import linkedInIcon from '/public/icons/LinkedInIcon.png';
import twitterIcon from '/public/icons/TwitterIcon.png';

function MobileContact() {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(function mount() {
    function onScroll(event: any) {
      const { documentElement } = event.srcElement;

      const scroll =
        ((documentElement.scrollTop - documentElement.clientHeight * 3.5) /
          documentElement.clientHeight) *
        100;
      console.log(scroll);

      if (scroll > 100) {
        setShowTitle(true);
      } else {
        setShowTitle(false);
      }
    }

    window.addEventListener('scroll', onScroll);
    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <Container>
      <ContactTitle showTitle={showTitle}>CONTACT</ContactTitle>
      <ContactIcons>
        <ContactIcon
          url={'https://github.com/medaworld'}
          imgUrl={githubIcon.src}
          alt={'Github'}
          hoverColor={'#2DA44E'}
        />
        <ContactIcon
          url={'mailto:brainsuruki@gmail.com'}
          imgUrl={emailIcon.src}
          alt={'Email'}
          hoverColor={'#3EA0ED'}
        />
        <ContactIcon
          url={'https://www.linkedin.com/in/brian-suruki'}
          imgUrl={linkedInIcon.src}
          alt={'LinkedIn'}
          hoverColor={'#0A67C3'}
        />
        <ContactIcon
          url={'https://twitter.com/meda_world'}
          imgUrl={twitterIcon.src}
          alt={'Twitter'}
          hoverColor={'#1D9BF0'}
        />
      </ContactIcons>
    </Container>
  );
}

export default MobileContact;
