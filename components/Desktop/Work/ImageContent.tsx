import Image from 'next/image';
import { WorkData } from '../../../helpers/organizers/types';
import {
  DesktopImage,
  ImageContainer,
  ImageContentContainer,
  MobileImage,
  Slide,
} from '../../../styles/components/Desktop/Work';

function ImageContent({
  data,
  scrollPercent,
  slideAmount,
}: {
  data: WorkData;
  scrollPercent: number;
  slideAmount: number;
}) {
  let mobileScrollPercent = 0;

  if (data.order == 1 && scrollPercent > 0) {
    mobileScrollPercent = scrollPercent * slideAmount;
  } else if (data.order == 2 && scrollPercent > 110 / slideAmount) {
    mobileScrollPercent = scrollPercent * (slideAmount / 2);
  } else if (data.order == 3 && scrollPercent > 210 / slideAmount) {
    mobileScrollPercent = scrollPercent * (slideAmount / 3);
  }

  let desktopScrollPercent = 0;

  if (data.order == 1 && scrollPercent > 30 / slideAmount) {
    desktopScrollPercent = scrollPercent * slideAmount;
  } else if (data.order == 2 && scrollPercent > 130 / slideAmount) {
    desktopScrollPercent = scrollPercent * (slideAmount / 2);
  } else if (data.order == 3 && scrollPercent > 250 / slideAmount) {
    desktopScrollPercent = scrollPercent * (slideAmount / 3);
  }

  return (
    <Slide>
      <ImageContentContainer>
        <ImageContainer>
          <MobileImage
            src={data.images.mobile}
            style={{
              transform: 'translateY(' + -mobileScrollPercent + 'vh)',
            }}
          />
          <DesktopImage
            src={data.images.desktop}
            style={{
              transform: 'translateY(' + -desktopScrollPercent + 'vh)',
            }}
          />
        </ImageContainer>
      </ImageContentContainer>
    </Slide>
  );
}
export default ImageContent;
