import Image from 'next/image';
import { WorkData } from '../../../helpers/organizers/types';
import {
  DesktopImage,
  ImageContainer,
  ImageContentContainer,
  MobileImage,
  SlideBackground,
} from '../../../styles/components/Desktop/Work';

function ImageContent({
  data,
  scrollPercent,
}: {
  data: WorkData;
  scrollPercent: number;
}) {
  let mobileScrollPercent = 0;

  if (data.order == 1 && scrollPercent > 10 / 3) {
    mobileScrollPercent = scrollPercent * 3;
  } else if (data.order == 2 && scrollPercent > 110 / 3) {
    mobileScrollPercent = scrollPercent * 1.25;
  } else if (data.order == 3 && scrollPercent > 210 / 3) {
    mobileScrollPercent = scrollPercent * 0.8;
  }

  let desktopScrollPercent = 0;

  if (data.order == 1 && scrollPercent > 50 / 3) {
    desktopScrollPercent = scrollPercent * 4;
  } else if (data.order == 2 && scrollPercent > 150 / 3) {
    desktopScrollPercent = scrollPercent * 1.5;
  } else if (data.order == 3 && scrollPercent > 250 / 3) {
    desktopScrollPercent = scrollPercent * 0.9;
  }

  return (
    <SlideBackground>
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
    </SlideBackground>
  );
}
export default ImageContent;
