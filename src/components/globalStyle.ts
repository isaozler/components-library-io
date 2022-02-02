import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    
    // Media queries breakpoints
    // Phone
    --screen-xs: 480px;
    --screen-xs-min: var(--screen-xs);

    // Screen / tablet
    --screen-sm: 576px;
    --screen-sm-min: var(--screen-sm);

    // Medium screen / desktop
    --screen-md: 768px;
    --screen-md-min: var(--screen-md);

    // Large screen / wide desktop
    --screen-lg: 992px;
    --screen-lg-min: var(--screen-lg);

    // Extra large screen / full hd
    --screen-xl: 1200px;
    --screen-xl-min: var(--screen-xl);

    // Extra extra large screen / large desktop
    --screen-xxl: 1600px;
    --screen-xxl-min: var(--screen-xxl);

    // Maximums
    --screen-xs-max: (var(--screen-sm-min) - 1px);
    --screen-sm-max: (var(--screen-md-min) - 1px);
    --screen-md-max: (var(--screen-lg-min) - 1px);
    --screen-lg-max: (var(--screen-xl-min) - 1px);
    --screen-xl-max: (var(--screen-xxl-min) - 1px);

    --containerWidth: var(--screen-lg);
    --headerImageWidth: 100%;
    --headerImageHeight: 400px;
    --contentBlockWithImageHeight: 340px;
    --contentBlockWithImageBackgroundHeight: 260px;
    --gutter: 10px;
    --containerPadding: var(--gutter);
    --controlSize: 30px;
    --controlColor: rgba(0, 0, 0, 0.25);
    --controlActiveColor: black;
    --baseFontSize: 14px;
  }

  @media screen and (min-width: var(--screen-lg)) {
    :root {
      --containerWidth: var(--screen-lg);
      --headerImageWidth: var(--screen-lg);
      --gutter: 20px;
      --controlSize: 40px;
    }
  }

  @media screen and (min-width: var(--screen-xl)) {
    :root {
      --containerWidth: var(--screen-lg);
      --headerImageWidth: var(--screen-xl);
      --headerImageHeight: 800px;

      --controlSize: 60px;
      --gutter: 80px;
      --containerPadding: 0;

      --baseFontSize: 16px;
    }
  }

  @media screen and (min-width: var(--screen-xxl)) {
    :root {
      --containerWidth: var(--screen-xl);

      --headerImageWidth: calc(90%);
      --headerImageHeight: 800px;

      --baseFontSize: 20px;
    }
  }
`;

export default GlobalStyle;
