import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
`;

export const ContactTitle = styled.div<{ showTitle: boolean }>`
  position: absolute;
  font: 120px Cabin;
  line-height: 120px;
  color: ${(p) => p.theme.colors.primary};
  opacity: 20%;
  z-index: -1;
  transform: ${(p) => (p.showTitle ? '' : 'translateY(110px)')};
  transition: transform 0.5s ease-out;
`;

export const ContactIcons = styled.div``;
