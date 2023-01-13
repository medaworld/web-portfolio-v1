import styled from 'styled-components';
import { size } from '../helpers/organizers/breakpoints';

export const DesktopMain = styled.main`
  display: inherit;
  width: 100%;
  height: 100vh;

  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

export const MobileMain = styled.main`
  display: inherit;
  width: 100%;
  height: 100vh;

  @media (min-width: 769px) {
    display: none;
  }
`;
