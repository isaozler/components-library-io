import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --containerWidth: 1024px;
    --headerImageWidth: 100%;
    --headerImageHeight: 400px;
    --contentBlockWithImageHeight: 340px;
    --contentBlockWithImageBackgroundHeight: 260px;
    --gutter: 10px;
    --containerPadding: var(--gutter);
    --controlSize: 30px;
    --baseFontSize: 14px;
  }

  @media screen and (min-width: 1024px) {
    :root {
      --containerWidth: 1024px;
      --headerImageWidth: 1024px;
      --gutter: 20px;
      --controlSize: 40px;
    }
  }

  @media screen and (min-width: 1200px) {
    :root {
      --containerWidth: 1024px;
      --headerImageWidth: 1200px;
      --headerImageHeight: 800px;

      --controlSize: 60px;
      --gutter: 80px;
      --containerPadding: 0;

      --baseFontSize: 16px;
    }
  }

  @media screen and (min-width: 1400px) {
    :root {
      --containerWidth: 1200px;

      --headerImageWidth: calc(90%);
      --headerImageHeight: 800px;

      --baseFontSize: 20px;
    }
  }

  html,
  body {
    font-size: var(--baseFontSize);
  }
`;

export default GlobalStyle;
