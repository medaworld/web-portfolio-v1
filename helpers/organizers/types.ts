declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      id: string;
      background: string;
      primary: string;
      darker: string;
      hover: string;
      color: string;
      accent: string;
      success: string;
      error: string;
    };
  }
}

export type WorkData = {
  order: number;
  name: string;
  description: string;
  roles: string[];
  images: { desktop: string; mobile: string };
};

export type WorkTitleProps = {
  showTitle: { in: boolean; out: boolean };
};

export type ProjectProps = {
  name: string;
  description: string;
  roles: string[];
};
