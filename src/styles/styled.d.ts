import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      grandientEffect: string;
      secondary: string;
      green: string;
      yellow: string;
      pink: string;
      greenLow: string;
      blueLow: string;
      redLow: string;
      white: string;
      buttonText: string;
      textTitle1: string;
      textTitle2: string;
      textBase: string;
      textComplement: string;

      buttonBackground1: string;
      buttonBackground2: string;

      popupText: string;
      popupBackground: string;

      backgroundOrphanages: string;
      backgroundForm: string;
    };
  }
}
