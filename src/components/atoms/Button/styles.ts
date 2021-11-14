import styled, { css } from 'styled-components';
import ButtonProps from './schema';

export const ButtonSizes = {
  small: css`
    font-size: 12px;
    height: calc(2 * var(--gutter));
  `,
  normal: css`
    font-size: 14px;
  `,
  large: css`
    font-size: 16px;
    height: calc(6 * var(--gutter));
    padding: 0 calc(4 * var(--gutter));
  `,
}

const getStyles = ({
  color,
  colorHover,
  fontWeight,
  backgroundColor,
  backgroundColorHover,
  border,
  borderHover,
  isFullWidth,
  iconAlignment,
  size,
  underlined,
  underlinedHover,
}: ButtonProps) => css`
  color: ${color};
  background-color: ${!backgroundColor ? 'transparent' : backgroundColor};
  ${ButtonSizes[size || 'normal']}
  ${fontWeight ? css`font-weight: ${fontWeight};` : ''}
  ${border ? css`border: ${border.size} ${border.style || 'solid'} ${border.color};` : ''}
  ${border?.radius ? css`border-radius: ${border?.radius};` : ''}
  ${isFullWidth ? css`
    width: 100%;
  ` : ''}
  ${iconAlignment === 'right'
    ? css`
          flex-direction: row-reverse;
        `
    : ''
  }
  ${!!backgroundColorHover || !!colorHover
    ? css`
      &:hover {
        ${backgroundColorHover ? `background-color: ${backgroundColorHover};` : ''}
        ${colorHover ? `color: ${colorHover};` : ''}
      }
  ` : ''}
  ${borderHover
    ? css`
        &:hover {
          border: ${borderHover.size} ${borderHover.style || 'solid'} ${borderHover.color};
          ${borderHover?.radius ? css`border-radius: ${borderHover?.radius};` : ''}
        }`
    : ''}
  ${underlined && underlinedHover
    ? css`text-decoration: underline;`
    : !underlined && underlinedHover
      ? css`
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      `
      : underlined && !underlinedHover
        ? css`
          text-decoration: underline;

          &:hover {
            text-decoration: none;
          }
        `
        : css`text-decoration: none;`
  }
`

export const Button = styled.button.attrs((props: ButtonProps) => props)`
  border: 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: calc(4 * var(--gutter));
  align-items: center;
  justify-content: center;
  padding: 0 var(--gutter);
  text-decoration: none;
  ${(props: ButtonProps) => getStyles(props)}
`;

export const ButtonLink = styled.a.attrs((props: ButtonProps) => props)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  height: calc(4 * var(--gutter));
  padding: 0 calc(2 * var(--gutter));
  text-decoration: none;
  ${(props: ButtonProps) => getStyles(props)}
`;

export const Label = styled.div.attrs((props: ButtonProps) => props)`
  white-space: nowrap;
`;

export const Icon = styled.div.attrs((props: ButtonProps) => props)`
  width: calc(1.5 * var(--gutter));
  height: calc(1.5 * var(--gutter));
  margin-left: 0;
  margin-right: var(--gutter);

  ${({ iconAlignment }) =>
    iconAlignment === 'right'
      ? css`
          margin-left: var(--gutter);
          margin-right: 0;
        `
      : ''
  }
  ${({ size }) =>
    size === 'large'
      ? css`
        width: calc(3 * var(--gutter));
        height: calc(3 * var(--gutter));
      `
      : ''
  }
`;
