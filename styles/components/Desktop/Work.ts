import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* align-items: center; */
  flex-direction: column;
`;

export const WorkSummaryContainer = styled.div`
  display: flex;
  height: 500px;
  justify-content: space-evenly;
`;

export const SummaryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vh;
`;

export const Title = styled.div`
  font-size: 40px;
  margin-bottom: 40px;
`;

export const Description = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
`;

export const Roles = styled.div`
  font-size: 20px;
`;

export const Images = styled.div`
  position: relative;
  width: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 80%;
  }
`;

export const ImageContainer = styled.div<{
  width: number;
  translateX: number;
  translateY: number;
}>`
  position: absolute;
  width: ${(p) => p.width + 'px'};
  transform: ${(p) =>
    'translateY(' +
    p.translateY +
    'px) ' +
    'translateX(' +
    p.translateX +
    'px)'};
`;

export const ImageItem = styled.div<{ img: string }>`
  background: center url(${(p: any) => p.img});
  background-size: contain;
  background-repeat: no-repeat;
  padding-bottom: 50%;

  cursor: pointer;
`;
