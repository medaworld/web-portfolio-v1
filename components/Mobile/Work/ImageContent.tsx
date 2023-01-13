import { useState } from 'react';
import { WorkData } from '../../../helpers/organizers/types';
import {
  DesktopImage,
  ImageContainer,
  ImageContentContainer,
  ImageNavWindow,
  MobileImage,
  Slide,
  VisitButton,
} from '../../../styles/components/Mobile/Work';

function ImageContent({
  data,
  clientHeight,
  scrollTop,
  index,
}: {
  data: WorkData;
  clientHeight: number;
  scrollTop: number;
  index: number;
}) {
  const top = clientHeight * (1 + index);
  const bottom = clientHeight * (2 + index);
  const [imagesShift, setImagesShift] = useState(false);

  let slidePercent: number = 0;

  if (scrollTop >= top) {
    slidePercent = ((scrollTop - top) / (bottom - top)) * 100;
  }

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Slide>
      <ImageContentContainer>
        <ImageContainer slidePercent={slidePercent}>
          <ImageNavWindow>
            {data.links.site && (
              <VisitButton onClick={() => openInNewTab(data.links.site!)}>
                Visit Site
              </VisitButton>
            )}
            {data.links.github && (
              <VisitButton onClick={() => openInNewTab(data.links.github!)}>
                Github
              </VisitButton>
            )}
          </ImageNavWindow>
          <DesktopImage src={data.images.desktop} />
          <MobileImage
            src={data.images.mobile}
            style={{
              transform: 'translateY(' + -slidePercent * 0.8 + 'vh)',
            }}
          />
        </ImageContainer>
      </ImageContentContainer>
    </Slide>
  );
}
export default ImageContent;
