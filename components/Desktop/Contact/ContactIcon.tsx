import { Logo, LogoWrapper } from '../../../styles/components/Desktop/Contact';

function ContactIcon({
  url,
  imgUrl,
  alt,
  hoverColor,
}: {
  url: string;
  imgUrl: string;
  alt: string;
  hoverColor: string;
}) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <LogoWrapper>
        <Logo hoverColor={hoverColor} url={imgUrl} />
      </LogoWrapper>
    </a>
  );
}

export default ContactIcon;
