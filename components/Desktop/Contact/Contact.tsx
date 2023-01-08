import { useEffect, useState } from 'react';
import {
  ContactIcons,
  ContactTitle,
  Container,
} from '../../../styles/components/Desktop/Contact';

function Contact() {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(function mount() {
    function onScroll(event: any) {
      const { documentElement } = event.srcElement;

      const scroll =
        ((documentElement.scrollTop - documentElement.clientHeight * 5) /
          documentElement.clientHeight) *
        100;

      if (scroll > 0) {
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
      <ContactIcons>'hi'</ContactIcons>
    </Container>
  );
}

export default Contact;
