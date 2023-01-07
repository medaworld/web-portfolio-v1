import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  flex-direction: column;
`;

export const WorkTitle = styled.div.attrs<{ scrollPercent: number }>(
  ({ scrollPercent }) => ({
    style: {
      marginTop: -scrollPercent * 30 - 50 + 'px',
    },
  })
)`
  position: absolute;
  font: 120px Catamaran;
  line-height: 120px;
  color: ${(p) => p.theme.colors.success};
  opacity: 40%;
  right: 5%;
  transition: all 0.5s ease-out;
`;

export const ProjectTitle = styled.div`
  position: fixed;
  font: 50px Inter;
  color: ${(p) => p.theme.colors.background};
  top: 25vh;
  margin-left: 5%;
  width: 500px;
  transition: all 0.5s ease-out;
`;

export const ProjectDescription = styled.div`
  position: fixed;
  font: 30px Inter;
  color: ${(p) => p.theme.colors.background};
  top: calc(25vh + 150px);
  margin-left: 5%;
  width: 500px;
  transition: all 0.5s ease-out;
`;

export const ProjectRoles = styled.div`
  position: fixed;
  font: 25px Inter;
  color: ${(p) => p.theme.colors.background};
  top: calc(25vh + 150px + 150px);
  margin-left: 5%;
  width: 500px;
  transition: all 0.5s ease-out;
`;

export const WorkSummaryContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.background};
  justify-content: space-evenly;
`;

export const SummaryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vh;
`;

export const Title = styled.div`
  font: 50px Inter;
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
