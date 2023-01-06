import {
  ImageContainer,
  Images,
  ImageItem,
} from '../../../styles/components/Desktop/Work';

function SummaryImages({
  images,
}: {
  images: { desktop: string; mobile: string };
}) {
  return (
    <Images>
      <ImageContainer width={700} translateX={0} translateY={-40}>
        <ImageItem img={images.desktop} />
      </ImageContainer>
      <ImageContainer width={500} translateX={-100} translateY={0}>
        <ImageItem img={images.mobile} />
      </ImageContainer>
    </Images>
  );
}
export default SummaryImages;
