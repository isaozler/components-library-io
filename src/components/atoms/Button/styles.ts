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
  position: relative;
  width: calc(1.5 * var(--gutter));
  height: calc(1.5 * var(--gutter));
  
  ${({ iconAlignment, label }) =>
    !!label ? iconAlignment === 'right'
      ? css`
          margin-left: var(--gutter);
          margin-right: 0;
        `
      : css`
          margin-left: 0;
          margin-right: var(--gutter);
        `
      : css` margin: 0;`
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

type BadgeType = {
  badgeTextColor?: string;
  badge: string | number | boolean;
  color?: string;
}

export const Badge = styled.div.attrs((props: BadgeType) => props)`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 100%;

  ${({ badge }) => {
    if (typeof badge === 'boolean') {
      return css`
        width: 10px;
        height: 10px;
      `
    } else {
      return css`
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        font-weight: bold;
        color: ${({ badgeTextColor }: BadgeType) => badgeTextColor || 'white'};
      `
    }
  }}
  
  transform: translate(50%, -50%);
  background: ${({ color }) => color || 'white'};
`
